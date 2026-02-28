// src/components/Hero.tsx — Duwy-inspired layout

const AVATAR = "https://unavatar.io/twitter/Ymkhan0";

export function Hero() {
  return (
    <section className="hero">
      {/* ── Nav ─────────────────────────────── */}
      <nav className="hero-nav">
        <span className="hero-brand">YK</span>

        <div className="hero-nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="https://github.com/ykhan-5" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <a
          href="https://x.com/Ymkhan0"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-contact-btn"
        >
          Say hi →
        </a>
      </nav>

      {/* ── Main ────────────────────────────── */}
      <div className="hero-main">

        {/* Image floats top-right */}
        <div className="hero-float-img">
          <img src={AVATAR} alt="Yusuf Khan" />
        </div>

        {/* Big name anchored bottom-left */}
        <h1 className="hero-name">
          Yusuf<br />Khan
        </h1>

        {/* Tagline bottom-right */}
        <p className="hero-sub">
          Software engineer.<br />
          Building things that work<br />
          and shipping them.
        </p>
      </div>
    </section>
  );
}
