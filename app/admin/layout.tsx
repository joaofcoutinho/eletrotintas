import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { cookies } from "next/headers"
import { logoutAction } from "./actions"

export const metadata: Metadata = {
  title: "Painel Administrativo | Eletrotintas",
  description: "Painel administrativo para gerenciamento de contatos da Eletrotintas",
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.has("admin_authenticated")

  // Página de login: sem header
  if (!isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Eletrotintas Admin</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/admin/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/statistics" className="hover:underline">
                  Estatísticas
                </Link>
              </li>
              <li>
                <form action={logoutAction}>
                  <button type="submit" className="hover:underline">
                    Sair
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  )
}
