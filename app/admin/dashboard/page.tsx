"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getContacts } from "@/actions/get-contacts"
import { exportContacts } from "@/actions/export-contacts"
import { Button } from "@/components/ui/button"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  store: string
  created_at: string
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStore, setSelectedStore] = useState("")
  const [currentStore, setCurrentStore] = useState<string>("all")

  useEffect(() => {
    handleFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    // Remove o cookie de autenticação
    document.cookie = "admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/admin/login")
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("pt-BR")
  }

  const getStoreLabel = (store: string) => {
    const storeMap: Record<string, string> = {
      cariacica: "Cariacica",
      "vila-velha": "Vila Velha",
      serra: "Serra",
      vitoria: "Vitória",
      inicio: "Página Inicial",
    }
    return storeMap[store] || store
  }

  async function handleExport() {
    const result = await exportContacts(currentStore, searchTerm)

    if (!result.success) {
      setError(result.message || "Erro ao exportar contatos")
      return
    }

    // Criar um blob com o conteúdo CSV
    const blob = new Blob([result.csvContent], { type: "text/csv;charset=utf-8;" })

    // Criar um link para download
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `contatos-${currentStore || "todos"}-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  async function handleFilter(store?: string) {
    setLoading(true)
    try {
      const storeFilter = store || selectedStore || "all"
      setCurrentStore(storeFilter)

      const result = await getContacts(storeFilter, searchTerm)
      if (result.success) {
        setContacts(result.contacts)
      } else {
        setError(result.message || "Erro ao carregar contatos")
      }
    } catch (error) {
      console.error("Erro ao buscar contatos:", error)
      setError("Erro ao carregar contatos")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo-eletrotintas.png"
              alt="Eletrotintas Logo"
              width={150}
              height={60}
              className="h-10 w-auto"
            />
            <h1 className="ml-4 text-xl font-semibold text-gray-900">Painel Administrativo</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Contatos</h2>
            <div>
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    placeholder="Buscar por nome, email ou telefone"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                  <Button onClick={() => handleFilter()}>Buscar</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <select
                      value={selectedStore}
                      onChange={(e) => setSelectedStore(e.target.value)}
                      className="p-2 border rounded"
                    >
                      <option value="all">Todas as lojas</option>
                      <option value="cariacica">Cariacica</option>
                      <option value="vila-velha">Vila Velha</option>
                      <option value="serra">Serra</option>
                      <option value="vitoria">Vitória</option>
                      <option value="inicio">Página Inicial</option>
                    </select>
                    <Button onClick={() => handleFilter()}>Filtrar</Button>
                  </div>
                  <Button onClick={handleExport} variant="outline">
                    Exportar CSV
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
              <p className="mt-2 text-gray-600">Carregando contatos...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
          ) : contacts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">Nenhum contato encontrado.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Telefone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Loja
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getStoreLabel(contact.store)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(contact.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
