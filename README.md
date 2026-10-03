# Study Station

![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6)
![Vite](https://img.shields.io/badge/Vite-8-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

A free, searchable directory of curated courses, tutorials, developer resources, and YouTube channels, built as a React and TypeScript single-page app. Study Station does not host any learning content itself; it organizes links to third-party material in one place, with global search, category filtering, and animated pages. It runs entirely in the browser, and all content lives in typed data files inside the repository.

## Live Demo

[https://study-station.pages.dev/](https://study-station.pages.dev/)

## Table of Contents

- [Features](#features)
- [Content](#content)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Adding Content](#adding-content)
- [How Search Works](#how-search-works)
- [Architecture](#architecture)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Deployment](#deployment)
- [Performance Considerations](#performance-considerations)
- [Known Limitations](#known-limitations)
- [Documentation](#documentation)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Global search overlay that opens with the `/` key, supports arrow-key navigation, Enter to open, and Escape to close, and remembers the last six searches in `localStorage`
- Full search results page at `/search`, covering courses, resources, tutorials, and YouTube channels together
- Weighted, accent-insensitive search that ranks title matches above tag, category, provider, and description matches
- Courses page with a level filter, category filter, and three sort orders (Featured, Highest rated, Title A-Z)
- Resources and Tutorials pages with live text search and a category filter
- YouTubers page whose category filter is built automatically from the labels found in the channel data
- Category filter state kept in the URL query string through React Router
- Featured courses, resources, and tutorials surfaced on the home page, plus a "Find your lane" category grid
- Animated count-up statistics, a GSAP hero timeline, scroll-triggered reveals, and Framer Motion grid transitions
- Branded loading screen and fading page content on first load
- "Coming soon" course cards whose link reads "Notify me" instead of "View course"
- Contact form that posts to Formspree, with client-side validation, loading, success, and error states
- Privacy Policy, Terms & Conditions, Cookie Policy, and 404 pages
- Mobile navigation and a responsive layout

## Content

The counts below come directly from the data files in `src/data/`.

| Content type | Count | Notes |
| --- | --- | --- |
| Courses | 10 | 4 featured, 1 marked "coming soon", rated out of 5 |
| Resources | 65 | 12 featured; each has a "kind" label such as Language Docs or Design System |
| Tutorials | 4 | 3 featured |
| YouTube channels | 82 | 25 featured; categories are free-form labels |

Courses, resources, and tutorials share eight categories: Web Development, Data Science, AI & Machine Learning, Programming Fundamentals, Design, Career & Growth, DevOps & Cloud, and Community & News.

## Pages

| Route | Page | Content |
| --- | --- | --- |
| `/` | Home | Hero, animated statistics, featured courses, category grid, essential resources, featured tutorials |
| `/courses` | Courses | Searchable course list with level, category, and sort controls |
| `/resources` | Resources | Searchable resource list with a category filter |
| `/tutorials` | Tutorials | Searchable tutorial list with a category filter |
| `/youtubers` | YouTubers | Searchable channel list with a dynamic category filter |
| `/search` | Search results | Combined results across all content types |
| `/contact` | Contact | Email and community links, plus the Formspree contact form |
| `/privacy`, `/terms`, `/cookies` | Legal | Privacy Policy, Terms & Conditions, Cookie Policy |
| `*` | Not found | 404 page |

## Tech Stack

| Category | Technology |
| --- | --- |
| UI library | React 19 |
| Language | TypeScript 6 |
| Build tool | Vite 8 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4 through `@tailwindcss/vite`, with design tokens declared in an `@theme` block |
| Routing | React Router 7 (`BrowserRouter`) |
| Animation | GSAP 3 with ScrollTrigger, and Framer Motion 13 |
| Icons | Font Awesome Free 7, bundled through npm |
| Fonts | Google Fonts: Sora (display) and Manrope (body), loaded with a `<link>` tag |
| Linting | oxlint |
| Forms | Formspree (external endpoint) |
| Storage | Browser `localStorage`, used only for recent searches |

## Project Structure

```text
study-station/
|-- .github/workflows/
|   `-- deploy.yml              # Lint, build, and deploy to GitHub Pages
|-- docs/                       # Project documentation (see Documentation)
|-- public/
|   |-- images/
|   |   |-- courses/            # Course thumbnails
|   |   |-- tutorials/          # Tutorial thumbnails
|   |   `-- youtubers/          # Local channel avatar images
|   |-- apple-touch-icon.png
|   |-- favicon.ico
|   `-- icon-32.png, icon-192.png, icon-512.png
|-- src/
|   |-- assets/brand/           # Logo image
|   |-- components/
|   |   |-- cards/              # Course, Resource, Tutorial, YouTuber, and Category cards
|   |   |-- layout/             # Header, Footer, MobileNav, Layout, page transition overlay
|   |   |-- search/             # Search overlay, input, results, and empty state
|   |   `-- ui/                 # Buttons, badges, filters, loader, hero, and other primitives
|   |-- data/                   # Typed content: courses, resources, tutorials, youtubers, categories, site, navigation
|   |-- hooks/                  # Count-up, scroll reveal, recent searches, reduced motion, and more
|   |-- pages/                  # One file per route
|   |-- types/index.ts          # Shared content types
|   |-- utils/                  # Search scoring, category helpers, asset paths, and misc helpers
|   |-- App.tsx                 # Route table
|   |-- Root.tsx                # Router, loader, and motion configuration
|   |-- main.tsx                # Entry point
|   `-- index.css               # Tailwind import, theme tokens, and global styles
|-- index.html                  # Document shell with meta tags and font links
|-- netlify.toml                # Netlify build and SPA redirect
|-- vercel.json                 # Vercel build and SPA rewrite
|-- vite.config.ts
|-- tsconfig.json, tsconfig.app.json, tsconfig.node.json
|-- .oxlintrc.json
|-- package.json
|-- LICENSE                     # MIT License
`-- README.md
```

## Prerequisites

- Node.js 20 or later (the GitHub Actions workflow uses Node 20)
- npm
- An internet connection for the Google Fonts stylesheet and for channel avatars and some thumbnails hosted on external sites

## Getting Started

Clone the repository, install dependencies, and start the development server:

```bash
git clone https://github.com/stackiid/study-station.git
cd study-station
npm install
npm run dev
```

Open the local URL that Vite prints, typically `http://localhost:5173`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run build` | Type-checks with `tsc -b`, then builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs oxlint |

## Adding Content

Every course, resource, tutorial, and channel is one object in a typed array under `src/data/`. Adding an object makes it appear on its page, on the home page if it is marked `featured`, and in global search, with no other file changes.

| To add | Edit | Also do |
| --- | --- | --- |
| A course | `src/data/courses.ts` | Add a thumbnail to `public/images/courses/` |
| A resource | `src/data/resources.ts` | Use an existing category `id` |
| A tutorial | `src/data/tutorials.ts` | Add a thumbnail to `public/images/tutorials/` |
| A YouTube channel | `src/data/youtubers.ts` | Use a local avatar in `public/images/youtubers/` or an image URL |
| A category | `src/data/categories.ts` | Reference its `id` from content items |

Channel categories are free-form labels. A new label in `youtubers.ts` automatically becomes a filter option on the YouTubers page.

For the full field list and a data quality checklist, see [docs/04-Content-and-Search-System.md](./docs/04-Content-and-Search-System.md).

## How Search Works

Search runs fully in the browser against an in-memory index built from the four data files. The query is lowercased, stripped of accents, and matched as a single phrase against each item. The highest-scoring field decides the score:

| Match | Score |
| --- | --- |
| Title equals the query | 100 |
| Title contains the query | 70 (80 if the title starts with it) |
| Tags contain the query | 50 |
| Category name or resource kind contains the query | 35 |
| Provider, channel, or channel name contains the query | 25 |
| Description contains the query | 12 |

For channels, the "kind" field is the channel's `@handle`. Results are sorted by score, and the overlay shows the top eight.

## Architecture

- **Data layer:** typed arrays in `src/data/`, with shared interfaces in `src/types/index.ts`. `SearchableItem` is a union of the four content types.
- **Routing:** `Root.tsx` wraps the app in a `BrowserRouter` whose `basename` comes from Vite's `BASE_URL`, so the same build works at a domain root or under a sub-path. `App.tsx` defines the routes inside a shared `Layout`.
- **Asset paths:** `assetPath()` prefixes local image paths with `BASE_URL`, which keeps images working when the site is served from `/<repo-name>/`.
- **State:** component state with `useState` and `useMemo`; no global state library. Filter selections are mirrored into URL search parameters.
- **Animation:** GSAP handles the hero timeline, scroll-triggered reveals, and search result animation. Framer Motion handles grid item transitions and is configured with `reducedMotion="user"`.
- **Error-tolerant storage:** `localStorage` reads and writes are wrapped in `try/catch` helpers.

More detail is in [docs/02-Architecture.md](./docs/02-Architecture.md).

## Design System

Tokens are declared in the `@theme` block of `src/index.css`.

| Group | Details |
| --- | --- |
| Palette | Deep teal primary (`teal-500` `#227c6c`, `teal-600` `#145f52`), coral accent (`coral-500` `#ff7a45`), and an `ink` neutral scale |
| Typography | `--font-display` (Sora) and `--font-body` (Manrope) |
| Focus | A 2px coral outline on `:focus-visible` |
| Scrolling | Smooth scrolling, disabled when the user prefers reduced motion |

The site uses a light color scheme only. See [docs/03-Design-System.md](./docs/03-Design-System.md) for the full reference.

## Accessibility

Implemented practices visible in the code:

- `lang="en"` on the root element
- `aria-label` on icon-only controls and `aria-hidden` on decorative icons
- A search overlay with `role="dialog"`, `aria-modal`, and a listbox with `role="option"`, `aria-selected`, and `aria-activedescendant`
- Keyboard support for the search overlay (`/`, arrow keys, Enter, Escape)
- `aria-invalid`, inline error text, and `role="alert"` and `role="status"` messages on the contact form
- Visible `:focus-visible` outlines
- Reduced-motion support in the stylesheet, in a `useReducedMotion` hook that disables the page fade, and through Framer Motion's `reducedMotion="user"`

No accessibility audit or WCAG conformance level is claimed.

## SEO

`index.html` includes a title, meta description, canonical URL, robots tag, Open Graph tags, Twitter Card tags, `theme-color`, and favicon and touch icons. Because the app is a client-rendered single-page app, page titles and descriptions are the same on every route. The Open Graph image is the 180px Apple touch icon, and the site has no sitemap or `robots.txt` file.

## Deployment

Three hosting setups are configured.

| Host | Configuration |
| --- | --- |
| GitHub Pages | `.github/workflows/deploy.yml` installs with `npm ci`, runs lint and build, copies `index.html` to `404.html` as a single-page fallback, and deploys on pushes to `main`. The base path is set to `/<repo-name>/` through `VITE_BASE_PATH` |
| Vercel | `vercel.json` sets the build command and output directory and rewrites all routes to `index.html` |
| Netlify | `netlify.toml` sets the build command and publish directory and redirects all routes to `index.html` |

The canonical URL in `index.html` points to a `pages.dev` address. See [docs/05-Deployment-and-Maintenance.md](./docs/05-Deployment-and-Maintenance.md) for step-by-step instructions.

## Performance Considerations

- Production builds have source maps disabled
- Fonts use `preconnect` hints and `display=swap`
- Search runs against an in-memory array with no network requests
- All content is bundled into the JavaScript, which keeps hosting simple but means the bundle grows as content is added
- Many channel avatars load from external image hosts, so those images depend on third-party availability

## Known Limitations

- Search matches the whole query as one phrase, with no typo tolerance or word-by-word matching
- Content changes require editing the data files and redeploying; there is no admin interface or backend
- Channel subscriber and video counts are manually maintained snapshots and can drift out of date
- Many channel avatars are linked from external hosts rather than stored in the repository
- Search overlay results link to `/courses#<id>`, but the code has no scroll-to-hash handling for the route change
- Page titles and meta tags are not updated per route
- There are no automated tests
- The contact form depends on an external Formspree endpoint
- The site links to third-party content that can move or disappear

## Documentation

Detailed notes are in the `docs` folder:

1. [Project Overview](./docs/01-Project-Overview.md)
2. [Architecture](./docs/02-Architecture.md)
3. [Design System](./docs/03-Design-System.md)
4. [Content and Search System](./docs/04-Content-and-Search-System.md)
5. [Deployment and Maintenance](./docs/05-Deployment-and-Maintenance.md)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details. The license covers this codebase and its original design only. It does not extend to the third-party courses, tutorials, channels, and resources that the site links to, which remain the property of their creators and platforms.

Copyright (c) 2026 Study Station

## Acknowledgements

- Animation libraries: [GSAP](https://gsap.com) and [Framer Motion](https://www.framer.com/motion/)
- Styling utilities from [Tailwind CSS](https://tailwindcss.com)
- Typefaces from [Google Fonts](https://fonts.google.com): Sora and Manrope
- Icons from [Font Awesome](https://fontawesome.com)
- Contact form handling by [Formspree](https://formspree.io)
- All course, tutorial, resource, and channel authors whose work is linked from the site
