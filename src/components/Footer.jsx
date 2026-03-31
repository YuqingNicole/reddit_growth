import { useLang, t } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="foot-logo">upvote<span>.</span></div>
      <div className="foot-links">
        <a href="#">Twitter</a>
      </div>
      <div className="foot-copy">&copy; 2026 Upvote</div>
    </footer>
  )
}
