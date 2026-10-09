import { projects } from "../data/projects.js";
import FeaturedProject from "../components/ui/FeaturedProject.jsx";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function Gallery3D({ onOpenProject }) {
  const featured = projects.find((p) => p.area === "3d" && p.featured);
  const rest = projects.filter((p) => p.area === "3d" && !p.featured);

  return (
    <>
      <section className="section" id="3D">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">3D</span>
            <div>
              <h1 className="section-title">All 3D work.</h1>
              <p className="section-copy">
                Modeling, materials, lighting and procedural workflows — a
                growing collection of 3D studies and full scenes.
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