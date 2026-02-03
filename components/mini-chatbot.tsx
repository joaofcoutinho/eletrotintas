"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X, Loader2 } from "lucide-react"
import { saveContact } from "@/actions/save-contact"

interface MiniChatbotProps {
  onComplete: (userData: { name: string; email: string; phone: string }) => void
  onClose: () => void
  store: string
}

type Message = {
  text: string
  sender: "bot" | "user"
}

const MiniChatbot: React.FC<MiniChatbotProps> = ({ onComplete, onClose, store }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Antes de te conectar com nosso time, poderia me dizer seu nome?", sender: "bot" },
  ])
  const [input, setInput] = useState("")
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "phone" | "complete">("name")
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" })
  const [isSaving, setIsSaving] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }]
    setMessages(newMessages)

    // Process based on current step
    switch (currentStep) {
      case "name":
        setUserData({ ...userData, name: input })
        setTimeout(() => {
          setMessages([...newMessages, { text: `Prazer em conhecê-lo, ${input}! Qual é o seu email?`, sender: "bot" }])
          setCurrentStep("email")
          setInput("")
        }, 500)
        break

      case "email":
        setUserData({ ...userData, email: input })
        setTimeout(() => {
          setMessages([...newMessages, { text: "Ótimo! E qual é o seu número de telefone?", sender: "bot" }])
          setCurrentStep("phone")
          setInput("")
        }, 500)
        break

      case "phone":
        const updatedUserData = { ...userData, phone: input }
        setUserData(updatedUserData)

        // Salvar dados no banco de dados
        setIsSaving(true)
        try {
          const formData = new FormData()
          formData.append("name", updatedUserData.name)
          formData.append("email", updatedUserData.email)
          formData.append("phone", input)
          formData.append("store", store)

          await saveContact(formData)

          setTimeout(() => {
            setMessages([
              ...newMessages,
              {
                text: "Perfeito! Agora vou te conectar com nosso time. Obrigado pelas informações!",
                sender: "bot",
              },
            ])
            setCurrentStep("complete")
            setInput("")

            // Complete after showing thank you message
            setTimeout(() => {
              onComplete(updatedUserData)
            }, 1500)
          }, 500)
        } catch (error) {
          console.error("Erro ao salvar contato:", error)
          setTimeout(() => {
            setMessages([
              ...newMessages,
              {
                text: "Perfeito! Agora vou te conectar com nosso time. Obrigado pelas informações!",
                sender: "bot",
              },
            ])
            setCurrentStep("complete")
            setInput("")

            // Complete after showing thank you message even if saving failed
            setTimeout(() => {
              onComplete(updatedUserData)
            }, 1500)
          }, 500)
        } finally {
          setIsSaving(false)
        }
        break

      default:
        break
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-3 flex justify-between items-center">
        <h3 className="font-medium">Chat Eletrotintas</h3>
        <button
          onClick={onClose}
          className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
          aria-label="Fechar chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={index} className={`mb-3 ${message.sender === "user" ? "flex justify-end" : "flex justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {currentStep !== "complete" && (
        <div className="p-3 border-t">
          <div className="flex">
            <input
              ref={inputRef}
              type={currentStep === "email" ? "email" : currentStep === "phone" ? "tel" : "text"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                currentStep === "name"
                  ? "Digite seu nome..."
                  : currentStep === "email"
                    ? "Digite seu email..."
                    : "Digite seu telefone..."
              }
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isSaving}
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 flex items-center justify-center"
              disabled={isSaving}
            >
              {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : "Enviar"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MiniChatbot
