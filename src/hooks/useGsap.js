import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Runs GSAP code scoped to one component and cleans up when it unmounts.
export default function useGsap(setup, deps = []) {
  const scope = useRef(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => setup(gsap, scope.current), scope);
    return () => ctx.revert();
  }, deps);
  return scope;
}
