const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  try {
    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Email: { title: [{ text: { content: email } }] },
        Source: { select: { name: 'Landing Page' } },
        Status: { select: { name: 'New' } },
      },
    })
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Notion API error:', error)
    return res.status(500).json({ error: 'Failed to save', detail: error.message })
  }
}
