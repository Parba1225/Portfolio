import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap narrow notfound">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn main" to="/">Back to home</Link>
    </section>
  );
}
