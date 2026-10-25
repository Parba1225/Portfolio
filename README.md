# Levi P. Parba | Portfolio

A responsive, mobile-first portfolio built with React, React Router and GSAP. It has a hero, about, projects, contact and footer, with scroll and entrance animations and an animated network-style background.

**Live site:** add your Vercel or Netlify URL here after deploying

![Portfolio screenshot](docs/screenshot.png)

## Tech stack

- React 18 and Vite
- React Router (single page now, ready for more pages)
- GSAP and ScrollTrigger for animation
- Plain CSS (mobile-first)

## Project structure

```
src/
  components/   Hero, About, Projects, ProjectCard, Contact, Footer, Nav, Layout, Background
  pages/        Home, NotFound
  hooks/        useGsap (scoped GSAP setup and cleanup)
  data/site.js  Personal info and projects (edit this file)
```

## Setup

```bash
git clone <this-repo-url>
cd portfolio
npm install
npm run dev
```

Build for production with `npm run build` and preview it with `npm run preview`.

## Adding projects

Open `src/data/site.js`, add an object to the `projects` array and put the screenshot in `public/screenshots/`.

## Deploying

Import the repo in Vercel or Netlify. The build command is `npm run build` and the output folder is `dist`. `vercel.json` and `public/_redirects` already handle page routing.
