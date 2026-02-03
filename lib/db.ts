import { neon } from "@neondatabase/serverless"

// Configuração da conexão com o Neon
const sql = neon(process.env.DATABASE_URL!)

interface ContactData {
  name: string
  email: string
  phone: string
  store: string
}

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  store: string
  created_at: string
}

// Função para inicializar o banco de dados
export async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        store VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `
    return { success: true }
  } catch (error) {
    console.error("Error initializing database:", error)
    return { success: false, message: "Failed to initialize database" }
  }
}

// Função para buscar todos os contatos
export async function getAllContacts(filter = "all", searchTerm = "") {
  try {
    let result

    // Aplicar filtro por loja e termo de busca
    if (filter !== "all" && filter !== "" && searchTerm) {
      const searchPattern = `%${searchTerm}%`
      result = await sql`
        SELECT id, name, email, phone, store, created_at
        FROM contacts
        WHERE store = ${filter}
        AND (
          name ILIKE ${searchPattern} OR 
          email ILIKE ${searchPattern} OR 
          phone ILIKE ${searchPattern}
        )
        ORDER BY created_at DESC
      `
    }
    // Apenas filtro por loja
    else if (filter !== "all" && filter !== "") {
      result = await sql`
        SELECT id, name, email, phone, store, created_at
        FROM contacts
        WHERE store = ${filter}
        ORDER BY created_at DESC
      `
    }
    // Apenas termo de busca
    else if (searchTerm) {
      const searchPattern = `%${searchTerm}%`
      result = await sql`
        SELECT id, name, email, phone, store, created_at
        FROM contacts
        WHERE 
          name ILIKE ${searchPattern} OR 
          email ILIKE ${searchPattern} OR 
          phone ILIKE ${searchPattern}
        ORDER BY created_at DESC
      `
    }
    // Sem filtros
    else {
      result = await sql`
        SELECT id, name, email, phone, store, created_at
        FROM contacts
        ORDER BY created_at DESC
      `
    }

    return { success: true, contacts: result as Contact[] }
  } catch (error) {
    console.error("Erro ao buscar contatos:", error)
    return { success: false, message: "Erro ao buscar contatos", contacts: [] as Contact[] }
  }
}

// Função para obter estatísticas de contatos
export async function getContactStats() {
  try {
    // Total de contatos
    const totalResult = await sql`SELECT COUNT(*) as count FROM contacts`
    const total = Number(totalResult[0].count)

    // Contatos de hoje
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayResult = await sql`
      SELECT COUNT(*) as count 
      FROM contacts 
      WHERE created_at >= ${today.toISOString()}
    `
    const todayCount = Number(todayResult[0].count)

    // Contatos por loja
    const storeResult = await sql`
      SELECT store, COUNT(*) as count
      FROM contacts
      GROUP BY store
    `

    // Contatos dos últimos 7 dias
    const last7Days = new Date()
    last7Days.setDate(last7Days.getDate() - 6)
    last7Days.setHours(0, 0, 0, 0)

    const dailyResult = await sql`
      SELECT 
        DATE_TRUNC('day', created_at) as date,
        COUNT(*) as count
      FROM contacts
      WHERE created_at >= ${last7Days.toISOString()}
      GROUP BY DATE_TRUNC('day', created_at)
      ORDER BY DATE_TRUNC('day', created_at)
    `

    // Formatar dados para os gráficos
    const storeData = storeResult.map((item) => ({
      name: item.store as string,
      value: Number(item.count),
    }))

    // Preencher dias sem contatos
    const timeData = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(last7Days)
      date.setDate(date.getDate() + i)
      const dateStr = date.toLocaleDateString("pt-BR")

      const existingData = dailyResult.find(
        (item) => new Date(item.date as string).toLocaleDateString("pt-BR") === dateStr,
      )

      timeData.push({
        date: dateStr,
        contatos: existingData ? Number(existingData.count) : 0,
      })
    }

    return {
      success: true,
      stats: {
        total,
        today: todayCount,
        storeData,
        timeData,
      },
    }
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error)
    return { success: false, message: "Erro ao buscar estatísticas" }
  }
}

export async function saveContact(contactData: ContactData) {
  try {
    const { name, email, phone, store } = contactData

    const result = await sql`
      INSERT INTO contacts (name, email, phone, store)
      VALUES (${name}, ${email}, ${phone}, ${store})
      RETURNING id
    `

    return { success: true, id: result[0].id }
  } catch (error) {
    console.error("Erro ao salvar contato:", error)
    return { success: false, message: "Erro ao salvar contato" }
  }
}

// Função para exportar contatos para CSV
export async function exportContactsToCSV(filter = "all", searchTerm = "") {
  try {
    const { success, contacts } = await getAllContacts(filter, searchTerm)

    if (!success) {
      return { success: false, message: "Erro ao buscar contatos para exportação", csvContent: "" }
    }

    // Cabeçalho do CSV
    let csvContent = "Nome,Email,Telefone,Loja,Data\n"

    // Adicionar dados
    contacts.forEach((contact) => {
      const date = new Date(contact.created_at).toLocaleString("pt-BR")
      csvContent += `"${contact.name}","${contact.email}","${contact.phone}","${contact.store}","${date}"\n`
    })

    return { success: true, csvContent }
  } catch (error) {
    console.error("Erro ao exportar contatos:", error)
    return { success: false, message: "Erro ao exportar contatos", csvContent: "" }
  }
}
