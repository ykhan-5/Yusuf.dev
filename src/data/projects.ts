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

  // tweet-style display
  tweetText: string;
  imageTheme?: { bg: string; accent?: string }; // thumbnail color scheme
  screenshotUrl?: string; // swap in a real screenshot URL when ready

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
    id: "athan-visualizer",
    title: "Athan Visualizer",
    description: "Visualizing the claim that the Athan is always happening somewhere in the world.",
    date: "2026-02-18",
    category: "build",
    status: "wip",
    tags: ["Maps", "Data Viz", "Prayer Times"],
    tweetText: `Working on a website that test/visualizes the claim that "There isn't any time during the day or year when the Athan isn't happening somewhere in the world."\n\nWatching Athan times scrub across the world like this is wild 🤔`,
    imageTheme: { bg: "#0d1b2a", accent: "#7c3aed" },
    highlights: {
      problem: "The Athan is called 5 times a day across every timezone — is it truly continuous worldwide?",
      solution: "Interactive world map that scrubs through time, lighting up cities as the Athan begins.",
      stack: ["Leaflet.js", "Prayer time APIs", "React"],
      links: [],
    },
  },
  {
    id: "pinterest-ebay-matcher",
    title: "Pinterest → eBay Aesthetic Matcher",
    description: "Match a board's vibe to clothing listings using visual similarity.",
    date: "2025-08-07",
    category: "build",
    status: "wip",
    tags: ["React", "CLIP", "Firebase"],
    tweetText: `Built a thing: paste a Pinterest board URL, get back eBay listings that match the aesthetic.\n\nUsing CLIP embeddings to score visual similarity. Surprisingly works well for cottagecore and dark academia.`,
    imageTheme: { bg: "#1a0a2e", accent: "#e91e8c" },
    highlights: {
      problem: "Finding clothes that match an aesthetic is time-consuming and inconsistent.",
      solution: "Use embeddings + similarity search to recommend listings that match a board's vibe.",
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
    tweetText: `Put together a demo for WisdomAI — natural language → data insights, no SQL required.\n\nBuilt the whole frontend POC in a week. Full walkthrough in the link.`,
    imageTheme: { bg: "#0a1a0f", accent: "#22c55e" },
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
    tweetText: `Started a series: take products with bad UIs and redesign their landing pages.\n\nWeek 1 was a SaaS tool with 6 CTAs above the fold. Rebuilt it with 1. Conversion probably tripled.`,
    imageTheme: { bg: "#1a1207", accent: "#f59e0b" },
    highlights: {
      problem: "Most products leak conversions through unclear UI and weak hierarchy.",
      solution: "Weekly homepage redesigns with better layout, spacing, and flow.",
      stack: ["Figma", "React", "CSS / Tailwind later"],
      results: ["Consistent design practice", "Portfolio-ready before/after case studies"],
      links: [{ label: "Gallery", href: "#" }],
    },
  },
];
