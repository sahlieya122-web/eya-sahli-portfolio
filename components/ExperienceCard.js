export default function ExperienceCard({ experience, index }) {
  return (
    <article className="experience-card reveal">
      <div className="experience-index">0{index + 1}</div>
      <div>
        <div className="experience-topline">
          <span>{experience.organization}</span>
          <time>{experience.year}</time>
        </div>
        <h3>{experience.title}</h3>
        <p className="experience-summary">{experience.summary}</p>
        <ul>
          {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
        <div className="tag-row">
          {experience.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
