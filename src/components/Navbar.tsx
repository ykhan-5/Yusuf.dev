// src/components/Navbar.tsx — minimal nav for sub-pages
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="hero-nav" style={{ background: "var(--white)", borderBottom: "1px solid var(--border)" }}>
      <Link className="hero-brand" to="/" style={{ textDecoration: "none" }}>YK</Link>
      <div className="hero-nav-links">
        <Link to="/projects" style={{ fontSize: 13, fontWeight: 600, color: "var(--black)", opacity: 0.75 }}>
          Projects
        </Link>
        <a
          href="https://github.com/ykhan-5"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, fontWeight: 600, color: "var(--black)", opacity: 0.75 }}
        >
          GitHub
        </a>
        <a
          href="https://x.com/Ymkhan0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, fontWeight: 600, color: "var(--black)", opacity: 0.75 }}
        >
          Twitter
        </a>
      </div>
    </nav>
  );
}
