"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginAction(username: string, password: string) {
  if (username === "eletrotintas" && password === "eletrotintas") {
    const cookieStore = await cookies()
    cookieStore.set("admin_authenticated", "true", {
      maxAge: 86400,
      path: "/",
    })
    redirect("/admin/dashboard")
  }
  return { error: "Credenciais inválidas" }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.set("admin_authenticated", "", { expires: new Date(0), path: "/" })
  redirect("/admin")
}
