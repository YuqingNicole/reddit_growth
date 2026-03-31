import './Logos.css'

const companies = ['Notion', 'Linear', 'Vercel', 'Supabase', 'Resend']

export default function Logos() {
  return (
    <div className="logos-section">
      <div className="logos-label">Trusted by growth teams at</div>
      <div className="logos-row">
        {companies.map(name => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}
