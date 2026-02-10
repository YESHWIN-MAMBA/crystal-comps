export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="muted">
          © {new Date().getFullYear()} CrystalComps - Build by MAMBA. All rights
          reserved.
        </div>
        <div className="footerLinks">
          <a href="#home" className="navLink">
            Home
          </a>
          <a href="#how" className="navLink">
            How It Works
          </a>
          <a href="#about" className="navLink">
            About
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
