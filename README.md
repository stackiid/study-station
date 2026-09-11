# Study Station

Free, searchable courses, tutorials, and developer resources - organized in
one place, curated by hand.

![React](https://img.shields.io/badge/React-19-0F4C4C?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-0F4C4C?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-0F4C4C?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-0F4C4C?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-FF7A45)

## What this is

Study Station doesn't host any content itself - it's an organized,
searchable front end for **13 curated courses, 65 developer resources, and
5 video tutorials**, hand-picked and tagged across 8 categories (web dev,
data science, AI/ML, programming fundamentals, design, career & growth,
DevOps & cloud, community & news).

This repo is a ground-up rebuild of the original static HTML site into a
React + TypeScript single-page app with real search, filtering, and
animation - while keeping every piece of original content.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run `oxlint` across `src/` |

## Documentation

Full docs live in [`docs/`](./docs):

1. [Project Overview](./docs/01-Project-Overview.md)
2. [Architecture](./docs/02-Architecture.md)
3. [Design System](./docs/03-Design-System.md)
4. [Content & Search System](./docs/04-Content-and-Search-System.md) - **start here to add a course, resource, or tutorial**
5. [Deployment & Maintenance](./docs/05-Deployment-and-Maintenance.md)

## Adding content in short

Every course, resource, and tutorial is one object in a TypeScript array
under `src/data/`. Add an object, save, done - it's automatically live on
its page, on Home if featured, and in global search. See
[docs/04](./docs/04-Content-and-Search-System.md) for the exact shape.

## Deployment

Ready to deploy to any of the three most common static hosts:

- **Vercel** - `vercel.json` included, zero extra config
- **Netlify** - `netlify.toml` included, zero extra config
- **GitHub Pages** - `.github/workflows/deploy.yml` builds and deploys on
  every push to `main`

Details and the reasoning behind each in
[docs/05](./docs/05-Deployment-and-Maintenance.md).

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router v7 · GSAP +
ScrollTrigger · Font Awesome (bundled) · oxlint

## License

MIT - see [LICENSE](./LICENSE). Note that the MIT license covers this
codebase and its original design/content only. It does not extend to the
third-party courses, tutorials, and resources this site links to - those
remain the property of their respective creators and platforms.
