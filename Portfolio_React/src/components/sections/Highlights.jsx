import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights({ onOpenProject }) {
  const highlights = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">A growing collection of 3D, programming, and hybrid projects exploring the intersection of visual design and technology.</p>
          </div>
        </div>
        <ProjectGrid projects={highlights} onOpenProject={onOpenProject} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}