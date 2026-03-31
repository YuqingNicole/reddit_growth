import { useLang, t } from '../i18n'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle } = useLang()
  return (
    <nav className="navbar">
      <div className="logo">upvote<span>.</span></div>
      <div className="nav-center">
        <a href="#features">{t(lang, '功能', 'Features')}</a>
        <a href="#services">{t(lang, '服务', 'Services')}</a>
        <a href="#">{t(lang, '博客', 'Blog')}</a>
        <a href="#">{t(lang, '更新日志', 'Changelog')}</a>
      </div>
      <div className="nav-right">
        <button className="btn-lang" onClick={toggle}>
          {lang === 'zh' ? 'EN' : '中文'}
        </button>
        <button className="btn-text">Demo</button>
        <a href="mailto:yuqingchen02@gmail.com" className="btn-fill">{t(lang, '免费开始', 'Get Started')}</a>
      </div>
    </nav>
  )
}
