// src/components/RecentProjects.tsx
// Riley Walz-style: thumbnail + "Title: description" grid

import { projects } from "../data/projects";

// Flat color swatches per project — intentional, not placeholder vibes
const THUMB_COLORS: Record<string, string> = {
  "pinterest-ebay-matcher": "#FF4141",
  "wisdomai-demo":          "#0a0a0a",
  "redesign-practice":      "#D4FF00",
};

const THUMB_TEXT_COLORS: Record<string, string> = {
  "pinterest-ebay-matcher": "#fff",
  "wisdomai-demo":          "#fff",
  "redesign-practice":      "#0a0a0a",
};

function ProjectThumb({ id }: { id: string }) {
  const bg   = THUMB_COLORS[id]      ?? "#e5e5e5";
  const text = THUMB_TEXT_COLORS[id] ?? "#0a0a0a";
  return (
    <div
      className="project-thumb"
      style={{ background: bg, color: text }}
    />
  );
}

export function RecentProjects() {
  // Sort newest first
  const sorted = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="projects" style={{ background: "#fff" }}>
      <div className="projects-wrap">
        <div className="projects-header">
          <span className="projects-heading">Work</span>
          <span className="projects-count">{projects.length} projects</span>
        </div>

        <div className="projects-grid">
          {sorted.map((p) => {
            // Link out to the first external link if it exists, else detail page
            const externalLink = p.highlights.links?.find(l => l.href !== "#")?.href;
            const href = externalLink ?? `/projects/${p.id}`;
            const isExternal = !!externalLink;

            return (
              <a
                key={p.id}
                className="project-item"
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <ProjectThumb id={p.id} />

                <div className="project-info">
                  <p style={{ margin: 0, lineHeight: 1.45 }}>
                    <span className="project-title-name">{p.title}: </span>
                    <span className="project-title-desc">{p.description}</span>
                  </p>
                  <span className={`project-status-pill ${p.status}`}>
                    {p.status === "wip" ? "In progress" : p.status}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
