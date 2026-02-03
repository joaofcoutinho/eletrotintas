"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Se o href é uma âncora
      if (href.startsWith("#")) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const rect = targetElement.getBoundingClientRect()
          // Consideramos ativo se a seção estiver visível na tela
          // com uma margem de 100px do topo
          const isVisible = rect.top <= 100 && rect.bottom >= 100
          setIsActive(isVisible)
        }
      }
    }

    // Verificar inicialmente e depois em cada scroll
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [href])

  return (
    <Link
      href={href}
      className={`
        font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group
        ${isActive ? "text-blue-600 font-semibold" : ""}
        ${className}
      `}
    >
      {children}
      <span
        className={`
        absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
      `}
      ></span>
    </Link>
  )
}
