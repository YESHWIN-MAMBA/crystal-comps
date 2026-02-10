import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./AuthModal";

const NavLink = ({ href, children, onClick }) => (
  <a className="navLink" href={href} onClick={onClick}>
    {children}
  </a>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="header glass">
        <div className="headerInner">
          <div className="brand">
            <span className="brandMark" />
            <span className="brandText">CrystalComps</span>
          </div>

          <nav className="nav navDesktop">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#how">How It Works</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#contact">Get in Touch</NavLink>
          </nav>

          <div className="headerRight">
            <ThemeToggle />

            {/* IMPORTANT: button, not <a>, so it opens the modal */}
            <button
              className="navLink pill desktopOnly"
              type="button"
              onClick={() => setAuthOpen(true)}
            >
              Login
            </button>

            <a className="navLink pill desktopOnly" href="#cart">
              Cart (2)
            </a>

            {/* Mobile hamburger */}
            <button
              className="iconBtn mobileOnly menuBtn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <span className="burger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div className="drawerOverlay" onClick={() => setMenuOpen(false)} />
          <aside className="drawer glass" role="dialog" aria-modal="true">
            <div className="drawerTop">
              <div className="brand">
                <span className="brandMark" />
                <span className="brandText">Menu</span>
              </div>
              <button
                className="iconBtn"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                ✕
              </button>
            </div>

            <nav className="drawerNav">
              <NavLink href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink href="#how" onClick={() => setMenuOpen(false)}>
                How It Works
              </NavLink>
              <NavLink href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink href="#contact" onClick={() => setMenuOpen(false)}>
                Get in Touch
              </NavLink>
            </nav>

            <div className="drawerActions">
              <button
                className="btn ghost"
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setAuthOpen(true);
                }}
              >
                Login / Sign up
              </button>
              <a
                className="btn primary"
                href="#cart"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </a>
            </div>
          </aside>
        </>
      )}

      {/* Auth Modal */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultMode="login"
      />
    </>
  );
}
