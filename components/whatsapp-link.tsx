"use client"

interface WhatsAppLinkProps {
  href: string
  store: string
  children: React.ReactNode
  className?: string
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function WhatsAppLink({ href, store, children, className }: WhatsAppLinkProps) {
  function handleClick() {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "whatsapp_link_click",
      whatsapp_store: store,
      whatsapp_trigger: "inline_link",
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
