"use server"

import { exportContactsToCSV } from "@/lib/db"

export async function exportContacts(filter = "all", searchTerm = "") {
  return exportContactsToCSV(filter, searchTerm)
}
