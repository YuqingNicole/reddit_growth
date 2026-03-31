import { Link } from 'react-router-dom'
import { useLang, t } from '../i18n'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle } = useLang()
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Upvote<span>.Reddit</span></Link>
      <div className="nav-center">
        <a href="#features">{t(lang, '功能', 'Features')}</a>
        <a href="#services">{t(lang, '服务', 'Services')}</a>
        <a href="#demo">Demo</a>
        <Link to="/changelog">{t(lang, '更新日志', 'Changelog')}</Link>
      </div>
      <div className="nav-right">
        <button className="btn-lang" onClick={toggle}>
          {lang === 'zh' ? 'EN' : '中文'}
        </button>
        <a href="#cta" className="btn-fill">{t(lang, '免费开始', 'Get Started')}</a>
      </div>
    </nav>
  )
}
