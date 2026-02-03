"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getContactStats } from "@/actions/get-contacts"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function Statistics() {
  const [loading, setLoading] = useState(true)
  const [storeData, setStoreData] = useState<any[]>([])
  const [timeData, setTimeData] = useState<any[]>([])
  const [totalContacts, setTotalContacts] = useState(0)
  const [todayContacts, setTodayContacts] = useState(0)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const result = await getContactStats()

        if (result.success) {
          setStoreData(result.stats.storeData)
          setTimeData(result.stats.timeData)
          setTotalContacts(result.stats.total)
          setTodayContacts(result.stats.today)
        } else {
          setError(result.message || "Erro ao carregar estatísticas")
        }
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error)
        setError("Erro ao carregar estatísticas")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  if (loading) {
    return (
      <div className="p-8 flex justify-center items-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
        <p className="ml-2">Carregando estatísticas...</p>
      </div>
    )
  }

  if (error) {
    return <div className="p-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Estatísticas de Contatos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total de Contatos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalContacts}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Contatos Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{todayContacts}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Média Diária (7 dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {Math.round(timeData.reduce((acc, curr) => acc + curr.contatos, 0) / 7)}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contatos por Loja</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {storeData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">Nenhum dado disponível</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={storeData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {storeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} contatos`, "Quantidade"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contatos nos Últimos 7 Dias</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {timeData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">Nenhum dado disponível</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={timeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="contatos" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
