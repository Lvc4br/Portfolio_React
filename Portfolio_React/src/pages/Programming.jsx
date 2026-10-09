import { projects } from "../data/projects.js";
import FeaturedProject from "../components/ui/FeaturedProject.jsx";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function Programming({ onOpenProject }) {
  const featured = projects.find((p) => p.area === "code" && p.featured);
  const rest = projects.filter((p) => p.area === "code" && !p.featured);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Programming</span>
            <div>
              <h1 className="section-title">All programming work.</h1>
              <p className="section-copy">
                Projects that connect logic, interfaces and automation — from
                web interfaces to tools that support 3D workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section">
          <div className="container">
            <FeaturedProject project={featured} onOpenProject={onOpenProject} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <ProjectGrid projects={rest} onOpenProject={onOpenProject} />
        </div>
      </section>
    </>
  );
}
