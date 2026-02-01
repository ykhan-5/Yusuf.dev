export type BlogCategory = "deep_dive" | "learning" | "general";
export type BlogStatus = "published" | "draft";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  status: BlogStatus;

  // what should show inside a blog page
  highlights: {
    keyTakeaways: string[];
    outline: string[];
    links?: { label: string; href: string }[];
  };
};

export const posts: BlogPost[] = [
  {
    slug: "case-study-business-models",
    title: "Deep Dive: Business models that print",
    description: "A case-study framework for analyzing why certain products scale.",
    date: "2026-01-10",
    category: "deep_dive",
    status: "draft",
    highlights: {
      keyTakeaways: [
        "Distribution is usually the moat (not features).",
        "Pricing is a product decision, not a finance decision.",
        "Retention loops beat one-time growth spikes.",
      ],
      outline: [
        "The model (value → capture → defend)",
        "Case study template",
        "Examples + what to copy ethically",
      ],
      links: [{ label: "Notes", href: "#" }],
    },
  },
  {
    slug: "yale-markets-notes-1",
    title: "Learning: Yale Markets — Notes #1",
    description: "My running notes + explanations as I watch the class.",
    date: "2026-01-20",
    category: "learning",
    status: "published",
    highlights: {
      keyTakeaways: [
        "Markets coordinate incentives, not just prices.",
        "Information asymmetry shapes outcomes.",
        "Rules matter as much as participants.",
      ],
      outline: [
        "What a market is",
        "Why prices move",
        "Incentives + externalities",
      ],
    },
  },
  {
    slug: "rebuilding-portfolio-with-3d",
    title: "General: Rebuilding my portfolio with 3D",
    description: "How I’m making the site memorable with Womp models.",
    date: "2026-01-25",
    category: "general",
    status: "published",
    highlights: {
      keyTakeaways: [
        "Visual storytelling makes you stand out.",
        "Small motion > heavy animations.",
        "Consistency beats complexity.",
      ],
      outline: ["Design goals", "Hero composition", "Implementation plan"],
    },
  },
];
