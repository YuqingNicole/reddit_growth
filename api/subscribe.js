export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Email: { title: [{ text: { content: email } }] },
          Source: { select: { name: 'Landing Page' } },
          Status: { select: { name: 'New' } },
        },
      }),
    })

    if (response.ok) {
      return res.status(200).json({ success: true })
    } else {
      const err = await response.json()
      return res.status(500).json({ error: 'Notion error', detail: err.message })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save', detail: String(error) })
  }
}
