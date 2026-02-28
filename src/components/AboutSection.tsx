
import { Link } from "react-router-dom";


export function AboutSection() {
  return (
    <section id="about" className="container aboutWrap">
      <div className="aboutGrid">
        <div className="aboutVideoCard">
          <div className="aboutVideoOverlay">
            <div className="aboutVideoTitle">Get to know Yusuf</div>
            <div className="aboutVideoSub">Intro video (placeholder)</div>
          </div>
        </div>

        <div>
          <h2 className="aboutTitle">
            Hi, I’m Yusuf. I build software and share what I learn.
          </h2>

          <p className="aboutText">
            I’m into APIs, systems, and building tools that feel clean and
            useful. Outside of coding, I’m big on outdoors/scouting + travel —
            and I’m always trying to ship projects that actually help people.
          </p>

          <div className="aboutCtaRow">
            <a className="learnMoreRow" href="#projects">
              <span className="circleDown" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 12h10m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <Link className="navLink" to="/blog"> Read Some of my Thoughts</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
