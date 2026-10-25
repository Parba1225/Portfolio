import { site } from "../data/site.js";
import useGsap from "../hooks/useGsap.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Contact() {
  const ref = useGsap((gsap, el) => {
    gsap.from(".r", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 75%" } });
  });
  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="wrap">
        <h2 className="r">Have a project or a problem to fix?</h2>
        <a className="mail r" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="links r">
          <a href={`mailto:${site.email}`}><MailIcon /> Email</a>
          {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>}
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>}
        </div>
        <p className="muted r">{site.location} &middot; <a href={`tel:+63${site.phone.slice(1)}`}>{site.phone}</a></p>
      </div>
    </section>
  );
}
