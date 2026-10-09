export default function ProjectGrid({ projects, onOpenProject }) {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <article
          className="project-card"
          key={project.id}
          onClick={() => onOpenProject(project)}
          tabIndex="0"
          role="button"
          aria-haspopup="dialog"
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpenProject(project);
            }
          }}
        >
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
          <div className="tag-row">
            {project.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
