# 02 - Architecture

## Folder structure

```
study-station/
├── docs/                     # This documentation set
├── public/
│   ├── favicon.ico, apple-touch-icon.png, icon-32/192/512.png
│   │      # Generated from src/assets/brand/study-station-logo.png
│   └── images/
│       ├── courses/          # Course thumbnails
│       ├── tutorials/        # Tutorial thumbnails
│       └── youtubers/        # YouTube channel avatars
├── src/
│   ├── assets/brand/         # Source logo PNG (see docs/03, docs/05)
│   ├── components/
│   │   ├── ui/                # Generic, content-agnostic building blocks
│   │   │   (Button, Badge, Tag, SectionHeading, Loader, Spinner,
│   │   │    EmptyState, ErrorState, Logo, LogoMark, PersonIllustration,
│   │   │    PageHero, CategoryFilter, Select, AnimatedGridItem,
│   │   │    buttonStyles.ts) - plus YoutuberCategoryFilter, which lives
│   │   │    here for folder convention but is intentionally NOT generic:
│   │   │    it renders the youtubers-only YoutuberCategory[] shape
│   │   │    (see "Search architecture" below)
│   │   ├── layout/            # Header, MobileNav, Footer, Layout (route shell),
│   │   │                        PageTransitionOverlay
│   │   ├── search/            # GlobalSearch overlay + its sub-pieces
│   │   └── cards/              # CourseCard, ResourceCard, TutorialCard,
│   │                              CategoryCard, YoutuberCard
│   ├── data/                   # ALL site content lives here (see docs/04)
│   ├── hooks/                   # useReducedMotion, useScrollReveal, useBodyScrollLock,
│   │                             # useClickOutside, useRecentSearches
│   ├── pages/                    # One file per route, composed from components/data
│   ├── types/index.ts             # Shared TypeScript interfaces
│   ├── utils/                      # search.ts, categoryCounts.ts,
│   │                                 youtuberCategories.ts, helpers.ts
│   ├── App.tsx                      # Route table
│   ├── Root.tsx                      # Router + one-time entry loader
│   └── main.tsx                       # React DOM entry point
├── vite.config.ts
├── index.html
└── package.json
```

## Data flow

Every page follows the same pattern:

```
src/data/*.ts  →  page component (filters/sorts in memory)  →  card components
```

There is no fetching, no loading state for content (it's bundled at build
time), and no client-side database. Adding a course/resource/tutorial/
YouTuber channel is a matter of adding one object to the relevant array in
`src/data/` - see `docs/04-Content-and-Search-System.md`.

## Routing

`react-router-dom`'s `BrowserRouter` wraps the app in `Root.tsx`, with
`basename={import.meta.env.BASE_URL}` so the same build works whether it's
deployed at a domain root (Vercel, Netlify) or a sub-path (GitHub Pages
project sites - see `docs/05-Deployment-and-Maintenance.md`).

`App.tsx` defines a single route table, all nested under `<Layout />`
(header + `<Outlet />` + footer). `Layout` also resets scroll position to
the top on every route change.

## Search architecture

`src/utils/search.ts` exports `buildSearchIndex()`, which merges
`courses`, `resources`, `tutorials`, and `youtubers` into one flat array
of `SearchableItem`. `searchContent(query, options)` normalizes the query
(lowercase, diacritic-stripped, whitespace-collapsed) and scores every item
by field: exact title match > title contains > tags > category/kind >
provider/channel > description. Results are sorted by score, descending.
For a `Youtuber`, "title" reads its `channelName`, "provider" reads its
`channelName` again, and "category/kind" reads both its `categories` array
and its `handle`.

Both the header's `GlobalSearch` overlay and the `/search` page call this
same function - there is exactly one search implementation, not two. The
per-page "search within" boxes on `/courses`, `/resources`, `/tutorials`,
and `/youtubers` use a lighter inline filter (title/tags/provider) scoped
to that content type, for instant narrowing without leaving the page.

### YouTuber categories are a separate, dynamic system

`Course`, `Resource`, and `Tutorial` all reference a category by `id` into
the shared, manually curated `src/data/categories.ts` list. `Youtuber` does
not - its `categories` field is a plain array of display-ready strings.
`src/utils/youtuberCategories.ts` derives the full set of categories (and
a live count per category) by scanning `youtubers.ts` directly, and
`YoutuberCategoryFilter` renders whatever that scan returns. This keeps
YouTuber-only categories (e.g. "Motivation", "Confidence Building") out of
the shared list that Courses/Resources/Tutorials also render, and means a
brand-new category needs zero code changes - see
`docs/04-Content-and-Search-System.md`.

## Animation architecture

- `useReducedMotion()` reads `prefers-reduced-motion` and stays in sync via
  a `matchMedia` listener. Every animation hook and component checks this
  before animating anything.
- `useScrollReveal(containerRef, options)` is the one shared implementation
  for "fade + lift children into view on scroll," built on
  `gsap` + `ScrollTrigger`. Home's featured-courses, resources, tutorials,
  and categories sections each use this hook on their section ref. The
  standalone `/courses`, `/resources`, `/tutorials`, and `/youtubers`
  catalog pages animate their grids with Framer Motion's
  `AnimatedGridItem` instead (see "Data flow" above) - `data-reveal` on
  their cards is only load-bearing when that card also appears inside a
  Home section or the search overlay's results list.
- The Home page hero uses a one-off `gsap.timeline()` (not scroll-triggered,
  since it's above the fold and should animate immediately on load).
- The `Loader` component and mobile nav / search overlay use CSS
  transitions (not GSAP) since they're simple opacity/transform toggles
  that don't need a JS animation library.
- The search overlay stays mounted for a short delay after closing
  (`GlobalSearch.tsx`'s `mounted`/`shown` state) so its fade-out actually
  plays instead of the panel vanishing the instant `Escape`/backdrop-click
  fires - the same "animate out, then unmount" pattern most modal
  libraries use. `useBodyScrollLock` stays engaged for that whole window
  too, not just while the overlay is logically "open".
- `useBodyScrollLock` (used by both the mobile nav and the search overlay)
  locks scroll via `overflow: hidden` on `<html>`, not the more common
  `position: fixed` + saved-`scrollY` + `window.scrollTo()` restore
  trick. That older technique is worth actively avoiding here: this site
  sets `scroll-behavior: smooth` globally for anchor links, and a
  restoring `window.scrollTo()` call picks that up too, animating the
  page from wherever the `position: fixed` reset visually snapped it back
  to its real scroll position - a real, visible jump. `overflow: hidden`
  never reads or writes scroll position at all, so there's nothing to
  restore and nothing that can animate.

## State management

No global state library. State is either:

- **Local component state** (`useState`) for filters, form values, and UI
  toggles (menu open, search open).
- **URL search params** (`useSearchParams`) for category filters on
  `/courses`, `/resources`, `/tutorials`, `/youtubers`, and the query on
  `/search` - so filtered views are shareable/bookmarkable links.
- **`localStorage`** for recent search terms only (`useRecentSearches`),
  wrapped in try/catch so it degrades silently if storage is unavailable.

## Type safety

`src/types/index.ts` defines `Course`, `Resource`, `Tutorial`, `Youtuber`,
and the `SearchableItem` union. Every data file, card component, and search
function is typed against these - adding a required field to `Course`
will surface a compile error everywhere a course object is built, which is
the main safety net for content quality as the dataset grows.
