import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      page_size: 1,
    })
    // total count not directly available, use has_more + cursor pagination
    // For simplicity, just query with filter and count
    let count = 0
    let cursor = undefined
    do {
      const page = await notion.databases.query({
        database_id: DATABASE_ID,
        start_cursor: cursor,
        page_size: 100,
      })
      count += page.results.length
      cursor = page.has_more ? page.next_cursor : undefined
    } while (cursor)

    return res.status(200).json({ count })
  } catch (error) {
    console.error('Notion API error:', error)
    return res.status(500).json({ error: 'Failed to fetch count' })
  }
}
