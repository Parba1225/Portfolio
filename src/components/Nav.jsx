import { Link } from "react-router-dom";
import { site } from "../data/site.js";

const links = [["about", "About"], ["projects", "Projects"], ["contact", "Contact"]];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap nav-in">
        <Link className="logo" to="/">{site.name.split(" ")[0]} Parba<i /></Link>
        <ul>
          {links.map(([id, label]) => (
            <li key={id}><Link to={{ pathname: "/", hash: `#${id}` }}>{label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
