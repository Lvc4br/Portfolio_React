import { projects } from "../../data/projects.js";

export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal__panel">
        <button className="modal__close" onClick={onClose}>Close ×</button>
        <div className={`modal__visual ${project.visual}`}>
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span className="modal__placeholder" aria-hidden="true" />
          )}
          <span>{project.number}</span>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h2>{project.title}</h2>
        <p className="modal__copy">{project.description}</p>
        <div className="tag-row">
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="modal__note">
          Replace this case study with the real project: overview, process, technical breakdown, final result and GitHub/source link.
        </div>
      </div>
    </div>
  );
}