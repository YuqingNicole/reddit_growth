import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">upvote<span>.</span></div>
      <div className="nav-center">
        <a href="#features">功能</a>
        <a href="#pricing">定价</a>
        <a href="#">博客</a>
        <a href="#">更新日志</a>
      </div>
      <div className="nav-right">
        <button className="btn-text">Demo</button>
        <button className="btn-fill">免费开始</button>
      </div>
    </nav>
  )
}
