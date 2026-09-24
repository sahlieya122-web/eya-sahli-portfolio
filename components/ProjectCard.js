export default function ProjectCard({ project }) {
  return (
    <article
      className={`project-card project-photo-card reveal ${
        project.featured ? 'featured' : ''
      }`}
    >
      <div
        className="project-photo"
        style={{
          backgroundImage: `url("${project.image}")`,
        }}
      />

      <div className="project-photo-overlay" />

      <div className="project-photo-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag photo-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}