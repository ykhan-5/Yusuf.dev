// src/components/Hero.tsx

import { Link } from "react-router-dom";


export function Hero() {
  return (
    <section className="container hero">
      <div>
        <h1 className="h1">
          Building useful software and sharing what I learn along the way.
        </h1>

        <p className="subtle">
          This is where I’ll host my projects, write-ups, and experiments — and
          eventually turn it into a living portfolio.
        </p>

        <div className="ctaRow">
          <Link className="navLink" to="/projects">
            <button className="btnPrimary">View projects</button>
          </Link>
  
          <Link className="navLink" to="/blog">
            <button className="btnSecondary">Read the Blog</button>
          </Link>
          
        </div>

        <a className="learnMoreRow" href="#about">
          <span className="circleDown" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v12m0 0 5-5m-5 5-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Learn more about Yusuf
        </a>
      </div>

      <div className="visualCard">
        <div className="f1 floater">React • APIs • Systems</div>
        <div className="f2 floater">Shipping is greater than perfect</div>
        <div className="f3 floater">Projects live here</div>

        <div className="visualPlaceholder">
          <div className="placeholderBox">Filler hero image</div>
        </div>
      </div>
    </section>
  );
}
