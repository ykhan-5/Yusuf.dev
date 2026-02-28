// src/components/Experience.tsx

type Role = {
  company: string;
  title: string;
  period: string;       // display string for right side
  summary: string;      // one-line summary
};

const roles: Role[] = [
  {
    company: "ConocoPhillips",
    title: "Software Engineering Intern",
    period: "2025 – Now",
    summary: "Built TradeChat, an AI NLP-to-SQL chatbot for the London trading floor, cutting analytics retrieval time by ~40%.",
  },
  {
    company: "HCSS",
    title: "Credentials Software Engineering Intern",
    period: "Jan – May 2025",
    summary: "Built a company-wide React + C# access management tool serving 4,000+ companies; modernized legacy Razor frontend.",
  },
  {
    company: "SEP Workshop",
    title: "Data Structures Facilitator",
    period: "2023 – 2025",
    summary: "Guided 400+ students through C++ DSA curriculum — 85% pass rate, 10% above average on exams.",
  },
  {
    company: "HCSS",
    title: "API Product Management Intern",
    period: "Aug 2024 – Jan 2025",
    summary: "Shipped AI-backed API docs with 10+ SMEs; reduced support call volume by 15%.",
  },
  {
    company: "Waste Management",
    title: "Business Optimization Intern",
    period: "Summer 2024",
    summary: "Wrote 50+ SQL scripts to improve chatbot flows — drove a 9.31% increase in user interactions.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-wrap">

        {/* Header */}
        <div className="exp-head">
          <div className="exp-head-left">
            <span className="exp-tag">Experience</span>
            <h2 className="exp-title">A look at where<br />I've been building</h2>
          </div>
          <p className="exp-desc">
            Internships and roles across energy, construction tech,
            and enterprise software.
          </p>
        </div>

        {/* Rows */}
        <div className="exp-list">
          {roles.map((r, i) => (
            <div key={i} className="exp-row">
              <div className="exp-row-left">
                <span className="exp-role-title">{r.title} at {r.company}</span>
                <span className="exp-role-summary">{r.summary}</span>
              </div>
              <span className="exp-period">{r.period}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
