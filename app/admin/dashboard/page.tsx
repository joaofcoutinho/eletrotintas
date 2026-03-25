"use client"

import { useState, useEffect, useMemo } from "react"
import { getContacts } from "@/actions/get-contacts"
import { exportContacts } from "@/actions/export-contacts"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  store: string
  created_at: string
}

const STORE_LABELS: Record<string, string> = {
  cariacica: "Cariacica",
  "vila-velha": "Vila Velha",
  serra: "Serra",
  vitoria: "Vitória",
  inicio: "Pág. Inicial",
}

const STORE_COLORS: Record<string, { dot: string; badge: string }> = {
  cariacica:   { dot: "bg-blue-500",   badge: "bg-blue-50 text-blue-700 ring-blue-200" },
  "vila-velha":{ dot: "bg-violet-500", badge: "bg-violet-50 text-violet-700 ring-violet-200" },
  serra:       { dot: "bg-emerald-500",badge: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  vitoria:     { dot: "bg-orange-500", badge: "bg-orange-50 text-orange-700 ring-orange-200" },
  inicio:      { dot: "bg-gray-400",   badge: "bg-gray-50 text-gray-600 ring-gray-200" },
}

const STORES = [
  { value: "all",        label: "Todas as lojas" },
  { value: "cariacica",  label: "Cariacica" },
  { value: "vila-velha", label: "Vila Velha" },
  { value: "serra",      label: "Serra" },
  { value: "vitoria",    label: "Vitória" },
  { value: "inicio",     label: "Pág. Inicial" },
]

const DATE_PERIODS = [
  { value: "all",   label: "Todos" },
  { value: "today", label: "Hoje" },
  { value: "7d",    label: "7 dias" },
  { value: "30d",   label: "30 dias" },
  { value: "90d",   label: "3 meses" },
]

function formatDate(timestamp: string) {
  const d = new Date(timestamp)
  return {
    date: d.toLocaleDateString("pt-BR"),
    time: d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
  }
}

function whatsappUrl(phone: string) {
  const digits = phone.replace(/\D/g, "")
  const normalized = digits.startsWith("55") ? digits : `55${digits}`
  return `https://wa.me/${normalized}`
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0] ?? "")
    .join("")
    .toUpperCase()
  const hue = name.charCodeAt(0) % 6
  const colors = [
    "bg-blue-600","bg-violet-600","bg-emerald-600",
    "bg-orange-500","bg-rose-500","bg-cyan-600",
  ]
  return (
    <div className={`w-9 h-9 rounded-full ${colors[hue]} text-white flex items-center justify-center text-sm font-bold flex-shrink-0 select-none`}>
      {initials}
    </div>
  )
}

function filterByPeriod(contacts: Contact[], period: string) {
  if (period === "all") return contacts
  const now = new Date()
  const start = new Date()
  if (period === "today") {
    start.setHours(0, 0, 0, 0)
  } else if (period === "7d") {
    start.setDate(now.getDate() - 7)
  } else if (period === "30d") {
    start.setDate(now.getDate() - 30)
  } else if (period === "90d") {
    start.setDate(now.getDate() - 90)
  }
  return contacts.filter((c) => new Date(c.created_at) >= start)
}

function filterBySearch(contacts: Contact[], term: string) {
  if (!term.trim()) return contacts
  const t = term.toLowerCase()
  return contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(t) ||
      c.email.toLowerCase().includes(t) ||
      c.phone.includes(t)
  )
}

export default function AdminDashboard() {
  const [allContacts, setAllContacts] = useState<Contact[]>([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState("")
  const [searchTerm, setSearchTerm]   = useState("")
  const [activeStore, setActiveStore] = useState("all")
  const [activePeriod, setActivePeriod] = useState("all")
  const [exporting, setExporting]     = useState(false)

  useEffect(() => { fetchContacts("all") }, [])

  async function fetchContacts(store: string) {
    setLoading(true)
    setError("")
    try {
      const result = await getContacts(store, "")
      if (result.success) setAllContacts(result.contacts)
      else setError(result.message || "Erro ao carregar contatos")
    } catch {
      setError("Erro ao carregar contatos")
    } finally {
      setLoading(false)
    }
  }

  function handleStoreChange(store: string) {
    setActiveStore(store)
    fetchContacts(store)
  }

  async function handleExport() {
    setExporting(true)
    try {
      const result = await exportContacts(activeStore, searchTerm)
      if (!result.success) { setError(result.message || "Erro ao exportar"); return }
      const blob = new Blob([result.csvContent], { type: "text/csv;charset=utf-8;" })
      const url  = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href  = url
      link.download = `contatos-${activeStore}-${new Date().toISOString().split("T")[0]}.csv`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } finally {
      setExporting(false)
    }
  }

  const filtered = useMemo(() => {
    let result = filterByPeriod(allContacts, activePeriod)
    result = filterBySearch(result, searchTerm)
    return result
  }, [allContacts, activePeriod, searchTerm])

  const todayCount = useMemo(() =>
    filterByPeriod(allContacts, "today").length,
    [allContacts]
  )

  const weekCount = useMemo(() =>
    filterByPeriod(allContacts, "7d").length,
    [allContacts]
  )

  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Page title + export */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Leads</h2>
            <p className="text-sm text-gray-500 mt-0.5">Contatos recebidos pelas páginas das lojas</p>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all shadow-sm disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {exporting ? "Exportando..." : "Exportar CSV"}
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total geral",  value: allContacts.length, color: "text-gray-900",    sub: "todos os registros" },
            { label: "Hoje",         value: todayCount,         color: "text-blue-600",    sub: "entradas hoje" },
            { label: "Últimos 7 dias",value: weekCount,         color: "text-violet-600",  sub: "nesta semana" },
            { label: "Exibindo",     value: loading ? 0 : filtered.length, color: "text-emerald-600", sub: "com filtros ativos" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
              <p className={`text-3xl font-extrabold ${s.color}`}>{loading ? "—" : s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Filters card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">

          {/* Store pills */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Loja</p>
            <div className="flex flex-wrap gap-2">
              {STORES.map((s) => {
                const active = activeStore === s.value
                const color = STORE_COLORS[s.value]
                return (
                  <button
                    key={s.value}
                    onClick={() => handleStoreChange(s.value)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      active
                        ? "bg-gray-900 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {color && (
                      <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-white/70" : color.dot}`} />
                    )}
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Date period pills */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Período</p>
            <div className="flex flex-wrap gap-2">
              {DATE_PERIODS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setActivePeriod(p.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activePeriod === p.value
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Search */}
          <div className="relative">
            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por nome, e-mail ou telefone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
              <div className="w-6 h-6 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
              <span className="text-sm">Carregando contatos...</span>
            </div>
          ) : error ? (
            <div className="p-6">
              <div className="bg-red-50 border border-red-100 text-red-700 text-sm px-4 py-3 rounded-xl">{error}</div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 gap-2">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-medium text-gray-500">Nenhum contato encontrado</p>
              <p className="text-xs">Tente ajustar os filtros ou período</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Contato</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Telefone</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Loja</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Data</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((contact) => {
                      const { date, time } = formatDate(contact.created_at)
                      const storeStyle = STORE_COLORS[contact.store]
                      return (
                        <tr key={contact.id} className="hover:bg-gray-50/70 transition-colors group">
                          {/* Contato */}
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar name={contact.name} />
                              <div className="min-w-0">
                                <p className="font-semibold text-gray-900 truncate">{contact.name}</p>
                                <a
                                  href={`mailto:${contact.email}`}
                                  className="text-xs text-blue-500 hover:text-blue-700 hover:underline truncate block"
                                >
                                  {contact.email}
                                </a>
                              </div>
                            </div>
                          </td>

                          {/* Telefone */}
                          <td className="px-5 py-4">
                            <a
                              href={`tel:${contact.phone}`}
                              className="text-gray-700 hover:text-blue-600 font-medium tabular-nums"
                            >
                              {contact.phone}
                            </a>
                          </td>

                          {/* Loja */}
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${storeStyle?.badge ?? "bg-gray-50 text-gray-600 ring-gray-200"}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${storeStyle?.dot ?? "bg-gray-400"}`} />
                              {STORE_LABELS[contact.store] ?? contact.store}
                            </span>
                          </td>

                          {/* Data */}
                          <td className="px-5 py-4">
                            <span className="text-gray-700 font-medium">{date}</span>
                            <span className="text-xs text-gray-400 block">{time}</span>
                          </td>

                          {/* Ações */}
                          <td className="px-5 py-4">
                            <a
                              href={whatsappUrl(contact.phone)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                            >
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                              WhatsApp
                            </a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-400">
                  Exibindo <span className="font-semibold text-gray-600">{filtered.length}</span> de <span className="font-semibold text-gray-600">{allContacts.length}</span> registros
                </p>
                {(activePeriod !== "all" || searchTerm || activeStore !== "all") && (
                  <button
                    onClick={() => { setActivePeriod("all"); setSearchTerm(""); handleStoreChange("all") }}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
