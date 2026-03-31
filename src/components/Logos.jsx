import { useLang, t } from '../i18n'
import './Logos.css'

const companies = ['Notion', 'Linear', 'Vercel', 'Supabase', 'Resend']

export default function Logos() {
  const { lang } = useLang()
  return (
    <div className="logos-section">
      <div className="logos-label">{t(lang, '以下增长团队正在使用', 'Trusted by growth teams at')}</div>
      <div className="logos-row">
        {companies.map(name => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}
