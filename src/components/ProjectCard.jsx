import { GithubIcon } from "./Icons.jsx";

export default function ProjectCard({ title, description, tech = [], image, github, demo }) {
  return (
    <article className="card">
      {image && <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />}
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="card-links">
          {github && <a href={github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub repo</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
        </div>
      </div>
    </article>
  );
}
