export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  try {
    let count = 0
    let cursor = undefined
    do {
      const body = { page_size: 100 }
      if (cursor) body.start_cursor = cursor

      const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      count += data.results.length
      cursor = data.has_more ? data.next_cursor : undefined
    } while (cursor)

    return res.status(200).json({ count })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch count', detail: String(error) })
  }
}
