// src/pages/Home.tsx
import { Hero } from "../components/Hero";
import { RecentProjects } from "../components/RecentProjects";

const AVATAR = "https://unavatar.io/twitter/Ymkhan0";

function TwitterCTA() {
  return (
    <div className="twitter-cta">
      <div className="twitter-cta-left">
        <a
          href="https://x.com/Ymkhan0"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-avatar"
        >
          <img src={AVATAR} alt="Yusuf Khan on Twitter" />
        </a>
        <div>
          <div className="twitter-handle">@Ymkhan0</div>
          <div className="twitter-bio">evolve until you die</div>
        </div>
      </div>

      <a
        href="https://x.com/Ymkhan0"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter-follow-btn"
      >
        Follow on X →
      </a>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="footer-brand">Yusuf Khan</span>
      <div className="footer-links">
        <a href="https://github.com/ykhan-5" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/Ymkhan0" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/in/yusuf-khan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <RecentProjects />
      <TwitterCTA />
      <SiteFooter />
    </>
  );
}
