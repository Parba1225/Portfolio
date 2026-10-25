import { site } from "../data/site.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="social">
          {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>}
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>}
          <a href={`mailto:${site.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
