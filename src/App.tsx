import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetail } from "./pages/ProjectDetail";
import { BlogDetail } from "./pages/BlogDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />

      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  );
}
