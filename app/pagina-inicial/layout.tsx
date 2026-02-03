import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eletrotintas - Página Inicial | Grupo Eletromil",
  description:
    "Bem-vindo à Eletrotintas, sua referência em tintas e materiais elétricos no Espírito Santo. Conheça nossas lojas em Cariacica, Serra, Vila Velha e Vitória.",
}

export default function PaginaInicialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
