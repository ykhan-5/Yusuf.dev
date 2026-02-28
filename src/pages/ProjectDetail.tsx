import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ paddingTop: 32, paddingBottom: 96 }}>
          <h1 className="pageTitle">Project not found</h1>
          <Link className="btnSecondary" to="/projects">← Back to projects</Link>
        </main>
      </>
    );
  }

  const h = project.highlights;

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <div className="detailHeader">
          <h1 className="pageTitle" style={{ marginBottom: 8 }}>{project.title}</h1>
          <p className="subtle">{project.description}</p>

          <div className="badgeRow">
            <span className={`badge badge-${project.category}`}>{project.category}</span>
            <span className={`badge badge-${project.status}`}>{project.status}</span>
          </div>
        </div>

        <div className="detailGrid">
          <section className="detailCard">
            <h3 className="detailH">Problem</h3>
            <p className="detailP">{h.problem}</p>
          </section>

          <section className="detailCard">
            <h3 className="detailH">Solution</h3>
            <p className="detailP">{h.solution}</p>
          </section>

          <section className="detailCard">
            <h3 className="detailH">Stack</h3>
            <ul className="detailList">
              {h.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </section>

          {h.results?.length ? (
            <section className="detailCard">
              <h3 className="detailH">Results</h3>
              <ul className="detailList">
                {h.results.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </section>
          ) : null}

          {h.links?.length ? (
            <section className="detailCard">
              <h3 className="detailH">Links</h3>
              <div className="linkRow">
                {h.links.map((l) => (
                  <a key={l.label} className="btnSecondary" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div style={{ marginTop: 28 }}>
          <Link className="btnSecondary" to="/projects">← Back to projects</Link>
        </div>
      </main>
    </>
  );
}
