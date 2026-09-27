import { projects } from "../../data/projects.js";

export default function SelectedWork({ onOpenProject }) {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head"><span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">A growing collection of 3D, programming and hybrid experiments. Replace the visual placeholders with your real renders and project captures as each project matures.</p>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((project) => 
          <article className="project-card" key={project.id} onClick={() => onOpenProject(project)} tabIndex="0" role="button" onKeyDown={(e) => e.key === "Enter" && onOpenProject(project)}>
            <div className={`project-card__visual ${project.visual}`}>
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-card__placeholder" />
              )}
              <span>{project.number}</span>
              <i>{project.category}</i>
            </div>
            <div className="project-card__body">
              <div>
                <p className="mono">{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <span className="project-card__arrow">↗</span>
            </div>
            <div className="tag-row">{project.tools.map(t => <span key={t}>{t}</span>)}</div>
          </article>)}
        </div>
        <a href="#" className="more">More</a>
      </div>
    </section>
  );
}
