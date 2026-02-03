"use server"

import { saveContact as saveContactToDb } from "@/lib/db"

export async function saveContact(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const store = formData.get("store") as string

    // Validação básica
    if (!name || !email || !phone || !store) {
      return { success: false, message: "Todos os campos são obrigatórios" }
    }

    // Salvar no banco de dados
    const result = await saveContactToDb({
      name,
      email,
      phone,
      store,
    })

    return result
  } catch (error) {
    console.error("Erro ao salvar contato:", error)
    return { success: false, message: "Erro ao salvar contato" }
  }
}
