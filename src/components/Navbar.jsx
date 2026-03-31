import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">upvote<span>.</span></div>
      <div className="nav-center">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
      </div>
      <div className="nav-right">
        <button className="btn-text">Log in</button>
        <button className="btn-fill">Get Started</button>
      </div>
    </nav>
  )
}
