function Visual({ type }) {
  const labels = {
    ai: ['CNN', '01'], video: ['MPEG', '▶'], audio: ['LPC', '≈'], ofdm: ['OFDM', '⌁'],
    signal: ['DSP', '∿'], embedded: ['STM32', 'µC'], fpga: ['FPGA', '▦'], imu: ['IMU', '↗']
  };
  const [main, icon] = labels[type] || ['R&D', '•'];
  return (
    <div className={`project-visual visual-${type}`}>
      <div className="visual-grid" />
      <span className="visual-kicker">{main}</span>
      <strong>{icon}</strong>
      <div className="visual-line" />
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card reveal ${project.featured ? 'featured' : ''}`}>
      <Visual type={project.visual} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
