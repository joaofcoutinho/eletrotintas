"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollLinkProps {
  to: string
  children: ReactNode
  className?: string
}

export default function ScrollLink({ to, children, className = "" }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Verifica se 'to' é uma string válida
    if (!to || typeof to !== "string") {
      console.error('ScrollLink: prop "to" deve ser uma string válida')
      return
    }

    // Obtém o ID do elemento alvo
    const targetId = to.startsWith("#") ? to.substring(1) : to

    // Verifica se o elemento existe
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Rolagem suave para o elemento
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Atualiza a URL para manter a navegação por âncora
      window.history.pushState(null, "", to.startsWith("#") ? to : `#${to}`)
    } else {
      console.warn(`ScrollLink: Elemento com ID "${targetId}" não encontrado`)
    }
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  )
}
