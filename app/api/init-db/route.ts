import { NextResponse } from "next/server"
import { initDatabase } from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const result = await initDatabase()

    if (result.success) {
      return NextResponse.json({ message: "Database initialized successfully" })
    } else {
      return NextResponse.json({ error: "Failed to initialize database" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
