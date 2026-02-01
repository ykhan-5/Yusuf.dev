import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function RecentProjects() {
  const recent = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="container" style={{ paddingTop: 42, paddingBottom: 40 }}>
      <div className="sectionHead">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
          <h2 className="sectionTitle">Recent projects</h2>
          <Link className="subtleLink" to="/projects">
            View all →
          </Link>
        </div>
        <p className="sectionSub">The latest things I’m building right now.</p>
      </div>

      <div className="grid3">
        {recent.map((p) => (
          <div className="card" key={p.id}>
            <div className="cardMedia">Project placeholder</div>
            <div className="cardBody">
              <div className="cardTitle">{p.title}</div>
              <div className="cardMeta">{p.description}</div>

              {p.tags?.length ? (
                <div className="tagRow">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
