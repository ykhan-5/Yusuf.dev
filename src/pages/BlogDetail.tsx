import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { posts } from "../data/blog";

export function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ paddingTop: 32, paddingBottom: 96 }}>
          <h1 className="pageTitle">Post not found</h1>
          <Link className="btnSecondary" to="/blog">← Back to blog</Link>
        </main>
      </>
    );
  }

  const h = post.highlights;

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <h1 className="pageTitle" style={{ marginBottom: 8 }}>{post.title}</h1>
        <p className="subtle">{post.description}</p>

        <div className="badgeRow">
          <span className={`badge badge-${post.category}`}>{post.category.replace("_", " ")}</span>
          <span className={`badge badge-${post.status}`}>{post.status}</span>
        </div>

        <div className="detailGrid" style={{ marginTop: 18 }}>
          <section className="detailCard">
            <h3 className="detailH">Key takeaways</h3>
            <ul className="detailList">
              {h.keyTakeaways.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </section>

          <section className="detailCard">
            <h3 className="detailH">Outline</h3>
            <ul className="detailList">
              {h.outline.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </section>

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
          <Link className="btnSecondary" to="/blog">← Back to blog</Link>
        </div>
      </main>
    </>
  );
}
