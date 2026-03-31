import { useLang, t } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="foot-logo">upvote<span>.</span></div>
      <div className="foot-links">
        <a href="#">{t(lang, '隐私政策', 'Privacy')}</a>
        <a href="#">{t(lang, '服务条款', 'Terms')}</a>
        <a href="#">Twitter</a>
        <a href="#">{t(lang, '更新日志', 'Changelog')}</a>
        <a href="#">{t(lang, '服务状态', 'Status')}</a>
      </div>
      <div className="foot-copy">&copy; 2026 Upvote</div>
    </footer>
  )
}
