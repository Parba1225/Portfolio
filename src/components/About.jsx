import { site } from "../data/site.js";
import useGsap from "../hooks/useGsap.js";

export default function About() {
  const ref = useGsap((gsap, el) => {
    gsap.from(".r", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 75%" } });
  });
  return (
    <section id="about" className="about" ref={ref}>
      <div className="wrap narrow">
        <h2 className="r">About me</h2>
        <p className="r">I’m Levi, a web developer based in {site.location}. I enjoy building websites that load fast, look right on every screen and work the way people expect.</p>
        <p className="r">I’m currently learning React and GSAP to build more interactive interfaces. My skills in programming, troubleshooting and networking help me find problems that sit between the code and the connection.</p>
        <ul className="facts r">
          {["Web Development", "Programming", "Troubleshooting", "Networking"].map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
