// src/components/RecentProjects.tsx
// Projects displayed as a Twitter/X-style feed

import { projects, type Project } from "../data/projects";

const AVATAR = "https://unavatar.io/twitter/Ymkhan0";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function TweetImage({ p }: { p: Project }) {
  if (p.screenshotUrl) {
    return (
      <div className="tweet-img-wrap">
        <img src={p.screenshotUrl} alt={p.title} />
      </div>
    );
  }
  if (p.imageTheme) {
    const { bg, accent } = p.imageTheme;
    return (
      <div
        className="tweet-img-wrap tweet-img-placeholder"
        style={{
          background: bg,
          boxShadow: accent ? `inset 0 0 120px ${accent}22` : undefined,
        }}
      >
        {/* dot grid evokes a map/data viz */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 20 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={`${(col / 19) * 100}%`}
                cy={`${(row / 11) * 100}%`}
                r="1.5"
                fill={accent ?? "#ffffff"}
                opacity={Math.random() > 0.75 ? (Math.random() * 0.6 + 0.1) : 0.04}
              />
            ))
          )}
        </svg>
        <span className="tweet-img-label" style={{ color: accent ?? "#ffffff" }}>
          {p.title}
        </span>
      </div>
    );
  }
  return null;
}

function TweetCard({ p }: { p: Project }) {
  const externalLink = p.highlights.links?.find(l => l.href !== "#")?.href;
  const href = externalLink ?? `/projects/${p.id}`;
  const isExternal = !!externalLink;

  // Split tweetText on \n\n for paragraph breaks
  const paragraphs = p.tweetText.split("\n\n");

  return (
    <article className="tweet-card">
      <a
        href="https://x.com/Ymkhan0"
        target="_blank"
        rel="noopener noreferrer"
        className="tweet-avatar"
      >
        <img src={AVATAR} alt="Yusuf Khan" />
      </a>

      <div className="tweet-body">
        {/* Header */}
        <div className="tweet-header">
          <span className="tweet-name">Yusuf Khan</span>
          <span className="tweet-handle">@Ymkhan0</span>
          <span className="tweet-dot">·</span>
          <span className="tweet-date">{formatDate(p.date)}</span>
        </div>

        {/* Tweet text */}
        <div className="tweet-text">
          {paragraphs.map((para, i) => (
            <p key={i} style={{ margin: i > 0 ? "12px 0 0" : "0" }}>{para}</p>
          ))}
        </div>

        {/* Image */}
        <TweetImage p={p} />

        {/* Actions row */}
        <div className="tweet-actions">
          <span className={`tweet-status-tag ${p.status}`}>
            {p.status === "wip" ? "In progress" : p.status}
          </span>

          <a
            className="tweet-view-link"
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {externalLink ? "View project →" : "Details →"}
          </a>
        </div>
      </div>
    </article>
  );
}

export function RecentProjects() {
  const sorted = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="projects" style={{ background: "#fff" }}>
      <div className="feed-wrap">
        <div className="feed-header">
          <span className="feed-heading">Work</span>
          <span className="feed-count">{projects.length} projects</span>
        </div>

        <div className="feed-list">
          {sorted.map(p => <TweetCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
