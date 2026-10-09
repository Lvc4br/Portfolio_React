export default function FeaturedProject({ project, onOpenProject }) {
  return (
    <div className="featured-project">
      <span className="eyebrow">Featured</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tools.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <button
        className="button button--solid"
        onClick={() => onOpenProject(project)}
      >
        View project ↗
      </button>
    </div>
  );
}
