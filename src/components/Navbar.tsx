import { Link, useLocation, useNavigate } from "react-router-dom";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goScroll = (id: string) => {
    // If we’re not on home, go home first, then scroll after paint
    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => {
        // a second frame helps on slower machines
        requestAnimationFrame(() => scrollToId(id));
      });
      return;
    }
    scrollToId(id);
  };

  return (
   <header className="container">
      <nav className="nav">
        <Link className="brand" to="/">
          <span className="brandUnderline">Yusuf Khan</span>
        </Link>

        <div className="navLinks">
          <Link className="navLink" to="/projects">Projects</Link>
          <Link className="navLink" to="/blog">Blog</Link>
          <a className="navLink" href="/#about">About</a>
          <a className="navLink" href="/#contact">Contact</a>
        </div>

        <div className="navRight">
          <button className="iconBtn" aria-label="Theme toggle (placeholder)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M5 19l1.5-1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="avatar" title="Profile (placeholder)">
            <div className="avatarInner" />
          </div>
        </div>
      </nav>
    </header>
  );
}
