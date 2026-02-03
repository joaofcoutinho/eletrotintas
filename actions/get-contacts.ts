"use server"

import { getAllContacts, getContactStats } from "@/lib/db"

export async function getContacts(filter = "all", searchTerm = "") {
  return getAllContacts(filter, searchTerm)
}

export { getContactStats }
