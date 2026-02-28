// src/components/RecentProjects.tsx
// Riley Walz-style: 2-col grid, thumbnail block + "Title: description"

import { projects } from "../data/projects";

export function RecentProjects() {
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
            const externalLink = p.highlights.links?.find(l => l.href !== "#")?.href;
            const href = externalLink ?? `/projects/${p.id}`;
            const isExternal = !!externalLink;
            const bg = p.imageTheme?.bg ?? "#e5e5e5";

            return (
              <a
                key={p.id}
                className="project-item"
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <div className="project-thumb" style={{ background: bg }} />
                <div className="project-info">
                  <p className="project-label">
                    <span className="project-title-name">{p.title}:</span>
                    {" "}
                    <span className="project-title-desc">{p.description}</span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
