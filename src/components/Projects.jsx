import { projects } from "../data/site.js";
import useGsap from "../hooks/useGsap.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const ref = useGsap((gsap, el) => {
    gsap.from(".card, .empty", { y: 50, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: el.querySelector(".grid"), start: "top 80%" } });
  });
  return (
    <section id="projects" ref={ref}>
      <div className="wrap">
        <h2>Projects</h2>
        <div className="grid">
          {projects.length === 0
            ? <div className="empty"><strong>Projects are coming soon.</strong>New work will be added here.</div>
            : projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}
