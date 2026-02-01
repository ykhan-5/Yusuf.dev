import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { projects, type ProjectCategory } from "../data/projects";

function CategoryIcon({ active, onClick, label, children }: any) {
  return (
    <button className={`iconFilter ${active ? "iconFilterActive" : ""}`} onClick={onClick} title={label}>
      {children}
    </button>
  );
}

export function ProjectsPage() {
  const [cat, setCat] = useState<ProjectCategory | "all">("all");

  const sorted = useMemo(() => {
    const list = [...projects].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (cat === "all") return list;
    return list.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <div className="pageHeaderRow">
          <div>
            <h1 className="pageTitle">Projects</h1>
            <p className="subtle">Filter by type, then click a card for the case study page.</p>
          </div>

         <div className="iconRow">
  <button
    className={`filterPill ${cat === "all" ? "filterPillActive" : ""}`}
    onClick={() => setCat("all")}
    title="Show all"
  >
    All
  </button>

  <CategoryIcon
    active={cat === "build"}
    onClick={() => setCat((c) => (c === "build" ? "all" : "build"))}
    label="Build"
  >
    {/* icon */}
  </CategoryIcon>

  <CategoryIcon
    active={cat === "design"}
    onClick={() => setCat((c) => (c === "design" ? "all" : "design"))}
    label="Design"
  >
    {/* icon */}
  </CategoryIcon>
</div>

        </div>

        <div className="grid3">
          {sorted.map((p) => (
            <Link to={`/projects/${p.id}`} className="card" key={p.id}>
              <div className="cardMedia">Project placeholder</div>
              <div className="cardBody">
                <div className="cardTitle">{p.title}</div>
                <div className="cardMeta">{p.description}</div>

                <div className="badgeRow" style={{ marginTop: 12 }}>
                  <span className={`badge badge-${p.category}`}>{p.category}</span>
                  <span className={`badge badge-${p.status}`}>{p.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
