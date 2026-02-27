// src/components/Hero.tsx
// Avatar via unavatar.io — pulls your Twitter/X profile pic automatically

const AVATAR = "https://unavatar.io/twitter/Ymkhan0";

export function Hero() {
  return (
    <section className="hero">
      {/* ── Nav ──────────────────────────────── */}
      <nav className="hero-nav">
        <span className="hero-brand">YK</span>
        <div className="hero-nav-links">
          <a href="#projects">Projects</a>
          <a href="https://github.com/ykhan-5" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/Ymkhan0" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </nav>

      {/* ── Body: photo | name | links ───────── */}
      <div className="hero-body">

        {/* Left: stacked photo frames (clicking goes to Twitter) */}
        <div className="hero-photo-col">
          <a
            href="https://x.com/Ymkhan0"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-photo-frame"
            title="@Ymkhan0 on X"
          >
            <img src={AVATAR} alt="Yusuf Khan" />
          </a>
          <div className="hero-photo-frame-2">
            <img src={AVATAR} alt="" aria-hidden="true" />
          </div>
        </div>

        {/* Center: the big name */}
        <h1 className="hero-name">
          Yusuf<br />Khan
        </h1>

        {/* Right: vertical social links */}
        <div className="hero-links-col">
          <a
            className="hero-social-item"
            href="https://github.com/ykhan-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hl-label">GitHub</span>
            <span className="hl-sub">Code & repos</span>
          </a>
          <a
            className="hero-social-item"
            href="https://x.com/Ymkhan0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hl-label">Twitter / X</span>
            <span className="hl-sub">@Ymkhan0</span>
          </a>
          <a
            className="hero-social-item"
            href="https://linkedin.com/in/yusuf-khan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hl-label">LinkedIn</span>
            <span className="hl-sub">Professional</span>
          </a>
        </div>
      </div>

      {/* ── Footer strip ─────────────────────── */}
      <div className="hero-footer">
        <p className="hero-tagline">
          Software engineer (building things that work and sharing how I got there)
        </p>
        <span className="hero-year">© 2026</span>
      </div>
    </section>
  );
}
