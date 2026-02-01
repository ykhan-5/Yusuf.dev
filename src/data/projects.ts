export type ProjectCategory = "build" | "design";
export type ProjectStatus = "live" | "wip" | "idea";

export type Project = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date for sorting
  category: ProjectCategory;
  status: ProjectStatus;
  tags?: string[];

  // what should show inside a project page
  highlights: {
    problem: string;
    solution: string;
    stack: string[];
    results?: string[];
    links?: { label: string; href: string }[];
  };
};

export const projects: Project[] = [
  {
    id: "pinterest-ebay-matcher",
    title: "Pinterest → eBay Aesthetic Matcher",
    description: "Match a board’s vibe to clothing listings using visual similarity.",
    date: "2025-08-07",
    category: "build",
    status: "wip",
    tags: ["React", "CLIP", "Firebase"],
    highlights: {
      problem: "Finding clothes that match an aesthetic is time-consuming and inconsistent.",
      solution: "Use embeddings + similarity search to recommend listings that match a board’s vibe.",
      stack: ["React", "Firebase", "CLIP embeddings", "Background jobs"],
      results: ["Prototype matching pipeline", "Board → listing similarity scoring"],
      links: [
        { label: "Repo", href: "https://github.com/ykhan-5/portfolio" },
      ],
    },
  },
  {
    id: "wisdomai-demo",
    title: "WisdomAI Demo",
    description: "Enterprise data insights POC + demo video.",
    date: "2025-07-21",
    category: "build",
    status: "live",
    tags: ["React", "Agents", "Demo"],
    highlights: {
      problem: "Teams lose time translating questions into dashboards/SQL.",
      solution: "Natural-language insights + guided drilldowns in a demoable UI.",
      stack: ["React", "API layer", "LLM prompts", "Data connectors"],
      results: ["Demo flow with realistic scenarios", "Clear storytelling for stakeholders"],
      links: [{ label: "Demo", href: "#" }],
    },
  },
  {
    id: "redesign-practice",
    title: "Redesign Practice Series",
    description: "Turning bad UIs into clean, modern landing pages (frontend only).",
    date: "2026-01-15",
    category: "design",
    status: "wip",
    tags: ["Figma", "UI", "Frontend"],
    highlights: {
      problem: "Most products leak conversions through unclear UI and weak hierarchy.",
      solution: "Weekly homepage redesigns with better layout, spacing, and flow.",
      stack: ["Figma", "React", "CSS / Tailwind later"],
      results: ["Consistent design practice", "Portfolio-ready before/after case studies"],
      links: [{ label: "Gallery", href: "#" }],
    },
  },
];
