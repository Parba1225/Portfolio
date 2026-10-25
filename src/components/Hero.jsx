import { site } from "../data/site.js";
import useGsap from "../hooks/useGsap.js";
import profile from "../assets/profile.webp";

export default function Hero() {
  const ref = useGsap((gsap) => {
    gsap.from(".hero-copy > *", { y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
    gsap.from(".hero-photo", { scale: 0.85, opacity: 0, duration: 1.2, delay: 0.2, ease: "power3.out" });
  });
  const [first, ...rest] = site.name.split(" ");
  const last = rest.pop();

  return (
    <header id="top" className="hero" ref={ref}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill"><i />Available for work</p>
          <h1>{first} {rest.join(" ")} <span>{last}</span></h1>
          <p className="tag">{site.tagline}</p>
          <div className="btns">
            <a className="btn main" href="#projects">View my work</a>
            <a className="btn alt" href="#contact">Contact me</a>
          </div>
        </div>
        <img className="hero-photo" src={profile} alt="Cartoon illustration of two people sitting together" width="206" height="206" />
      </div>
    </header>
  );
}
