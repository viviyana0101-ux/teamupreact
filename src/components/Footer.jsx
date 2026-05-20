import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">TeamUp <strong>AI</strong></span>
          </div>
          <p>Find the right teammates.<br />Build better projects.</p>
        </div>
        <div className="footer-links">
          <h5>Platform</h5>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#team">Team Roles</a>
          <a href="#signup">Sign Up</a>
        </div>
        <div className="footer-links">
          <h5>Connect</h5>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter / X</a>
          <a href="mailto:hello@teamupai.com">Email Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 TeamUp AI. Built with ❤️ for students, by students.</p>
      </div>
    </footer>
  )
}

export default Footer