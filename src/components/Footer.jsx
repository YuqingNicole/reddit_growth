import { Link } from 'react-router-dom'
import { useLang, t } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="foot-logo"><Link to="/">Upvote<span>.Reddit</span></Link></div>
      <div className="foot-links">
        <Link to="/privacy">{t(lang, '隐私政策', 'Privacy')}</Link>
        <Link to="/terms">{t(lang, '服务条款', 'Terms')}</Link>
        <Link to="/changelog">{t(lang, '更新日志', 'Changelog')}</Link>
        <Link to="/status">{t(lang, '服务状态', 'Status')}</Link>
      </div>
      <div className="foot-copy">&copy; 2026 Upvote.Reddit</div>
    </footer>
  )
}
