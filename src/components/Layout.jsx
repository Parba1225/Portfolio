import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Background from "./Background.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll to #section links, or to the top on a new page.
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 0);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return (
    <>
      <Background />
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
