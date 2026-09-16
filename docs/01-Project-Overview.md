# 01 - Project Overview

## What Study Station is

Study Station is a free, independent educational platform. It doesn't host
courses itself - it curates and organizes links to third-party courses,
tutorials, and resources (Google Drive folders, YouTube videos,
documentation sites, practice platforms) into one searchable, filterable
site.

This repository is a full rebuild of the original static HTML/CSS/JS site
into a modern React + TypeScript single-page application, with the same
content, reorganized and made searchable.

## Who this is for

- **Visitors**: anyone looking for a free course, a piece of documentation,
  or a tutorial, without hunting through scattered bookmarks.
- **Contributors**: anyone adding a new course, resource, or tutorial to the
  data files (see `docs/04-Content-and-Search-System.md` for the exact
  steps - it's a one-file edit with no other code changes required).

## Tech stack, at a glance

| Concern            | Choice                                   |
| ------------------- | ----------------------------------------- |
| Framework           | React 19 + TypeScript                     |
| Build tool           | Vite                                      |
| Styling             | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| Routing             | React Router v7 (`BrowserRouter`)         |
| Animation           | GSAP + `ScrollTrigger`; Framer Motion for filtered-list transitions |
| Icons               | Font Awesome Free (bundled via npm)       |
| Fonts               | Google Fonts (Sora + Manrope, via `<link>`) |
| Linting             | oxlint                                    |
| Contact form        | Formspree (`https://formspree.io/f/maeypyvr`) |
| Local persistence   | `localStorage` (recent search terms only) |

No backend, no database, no build-time CMS. Content lives in typed
TypeScript data files under `src/data/`.

## Page map

| Route        | Purpose                                               |
| ------------- | ------------------------------------------------------ |
| `/`           | Home - hero, featured courses, categories, featured resources, tutorial preview, community CTA |
| `/courses`    | Full course catalog with search, category filter, level filter, sort |
| `/resources`  | Full resource catalog with search and category filter  |
| `/tutorials`  | Full tutorial catalog with search and category filter  |
| `/contact`    | Contact form (Formspree) + direct contact channels     |
| `/privacy`    | Privacy Policy                                         |
| `/terms`      | Terms & Conditions                                     |
| `/search`     | Full-page search results (linked from the search overlay's "See all results") |
| `*`           | 404 Not Found                                          |

## What this rebuild deliberately does not include

- **No owner/about page.** The original site's `about.html` centered on the
  creator's personal bio and profile - that's intentionally left out of this
  rebuild in favor of a purely brand-level "Study Station" identity. Contact
  is handled through a general contact form and a community channel, not a
  personal profile.
- **No user accounts, no backend.** Everything is static content plus
  client-side search and filtering.
- **No purple/violet/indigo anywhere.** The brand palette is deep teal +
  warm coral by deliberate choice - see `docs/03-Design-System.md`.
