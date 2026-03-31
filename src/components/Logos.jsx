import './Logos.css'

const companies = ['Notion', 'Linear', 'Vercel', 'Supabase', 'Resend']

export default function Logos() {
  return (
    <div className="logos-section">
      <div className="logos-label">以下增长团队正在使用</div>
      <div className="logos-row">
        {companies.map(name => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}
