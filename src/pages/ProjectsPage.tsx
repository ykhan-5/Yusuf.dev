// src/pages/ProjectsPage.tsx
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { projects } from "../data/projects";

const THUMB_COLORS: Record<string, string> = {
  "pinterest-ebay-matcher": "#FF4141",
  "wisdomai-demo":          "#0a0a0a",
  "redesign-practice":      "#D4C9A8",
};

const THUMB_TEXT_COLORS: Record<string, string> = {
  "pinterest-ebay-matcher": "#fff",
  "wisdomai-demo":          "#fff",
  "redesign-practice":      "#0a0a0a",
};

export function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <section style={{ background: "#fff" }}>
        <div className="projects-wrap">
          <div className="projects-header">
            <span className="projects-heading">All Projects</span>
            <span className="projects-count">{projects.length} total</span>
          </div>

          <div className="projects-grid">
            {sorted.map((p) => {
              const externalLink = p.highlights.links?.find(l => l.href !== "#")?.href;
              const href = externalLink ?? `/projects/${p.id}`;
              const isExternal = !!externalLink;
              const bg   = THUMB_COLORS[p.id]      ?? "#e5e5e5";
              const text = THUMB_TEXT_COLORS[p.id] ?? "#0a0a0a";

              const Inner = (
                <>
                  <div className="project-thumb" style={{ background: bg, color: text }} />
                  <div className="project-info">
                    <p style={{ margin: 0, lineHeight: 1.45 }}>
                      <span className="project-title-name">{p.title}: </span>
                      <span className="project-title-desc">{p.description}</span>
                    </p>
                    <span className={`project-status-pill ${p.status}`}>
                      {p.status === "wip" ? "In progress" : p.status}
                    </span>
                  </div>
                </>
              );

              return isExternal ? (
                <a
                  key={p.id}
                  className="project-item"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Inner}
                </a>
              ) : (
                <Link key={p.id} className="project-item" to={href}>
                  {Inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
