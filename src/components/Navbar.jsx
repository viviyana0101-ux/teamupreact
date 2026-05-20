import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">⬡</span>
        <span className="logo-text">TeamUp <strong>AI</strong></span>
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#team">Team Roles</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className="nav-badge">Task Manager</span>
    </nav>
  )
}

export default Navbar