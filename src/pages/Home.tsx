import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { RecentProjects } from "../components/RecentProjects";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <RecentProjects />

      <section id="contact" className="container" style={{ paddingTop: 24, paddingBottom: 96 }}>
        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 24 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>Contact (placeholder)</h3>
          <p className="subtle">Later: email, socials, resume link.</p>
        </div>
      </section>
    </>
  );
}
