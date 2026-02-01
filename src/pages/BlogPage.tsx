import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { posts, type BlogCategory } from "../data/blog";

function CategoryIcon({ active, onClick, label, children }: any) {
  return (
    <button className={`iconFilter ${active ? "iconFilterActive" : ""}`} onClick={onClick} title={label}>
      {children}
    </button>
  );
}

export function BlogPage() {
  const [cat, setCat] = useState<BlogCategory | "all">("all");

  const sorted = useMemo(() => {
    const list = [...posts].sort(
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
            <h1 className="pageTitle">Blog</h1>
            <p className="subtle">Filter by category, then click a post for the “important elements.”</p>
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
    active={cat === "deep_dive"}
    onClick={() => setCat((c) => (c === "deep_dive" ? "all" : "deep_dive"))}
    label="Deep dive"
  >
    {/* icon */}
  </CategoryIcon>

  <CategoryIcon
    active={cat === "learning"}
    onClick={() => setCat((c) => (c === "learning" ? "all" : "learning"))}
    label="Learning"
  >
    {/* icon */}
  </CategoryIcon>

  <CategoryIcon
    active={cat === "general"}
    onClick={() => setCat((c) => (c === "general" ? "all" : "general"))}
    label="General"
  >
    {/* icon */}
  </CategoryIcon>
</div>

        </div>

        <div className="grid3">
          {sorted.map((p) => (
            <Link to={`/blog/${p.slug}`} className="card" key={p.slug}>
              <div className="cardMedia">Post placeholder</div>
              <div className="cardBody">
                <div className="cardTitle">{p.title}</div>
                <div className="cardMeta">{p.description}</div>

                <div className="badgeRow" style={{ marginTop: 12 }}>
                  <span className={`badge badge-${p.category}`}>{p.category.replace("_", " ")}</span>
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
