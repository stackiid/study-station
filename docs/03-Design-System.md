# 03 - Design System

## Brand direction

Study Station's visual identity is warm, editorial, and calm - closer to a
well-designed publication than a typical SaaS dashboard. The palette is
built from a single rule: **deep teal + warm coral, on soft paper
neutrals. No purple, violet, indigo, or magenta anywhere in the product.**

## Color tokens

All tokens live in `src/index.css` under `@theme`. Never hardcode a hex
value in a component - use the Tailwind classes generated from these
tokens (`bg-teal-700`, `text-coral-500`, etc.).

| Token | Hex | Use |
| --- | --- | --- |
| `--color-paper` | `#faf7f0` | Page background |
| `--color-surface` | `#ffffff` | Cards, panels |
| `--color-teal-500..900` | `#227c6c` → `#0a2e2c` | Primary brand color: headings, primary surfaces, the logo |
| `--color-coral-400..700` | `#ff8f5e` → `#c04f23` | Accent: CTAs, highlights, active states |
| `--color-ink-300..900` | `#93a29c` → `#142524` | Text hierarchy (body copy down to near-black headings) |

## Page background

The subtle teal/coral tint visible on every page is a single
`background-image` on `body` (`index.css`, `@layer base`) with
`background-attachment: fixed`, not a per-section effect. It used to be
applied per-section (each hero/banner had its own `brand-mesh` accent),
but that created a visible seam wherever one section's tinted background
met the next section's flat one - most noticeably right where the
floating header sits, since the gap around it showed flat `body` color
while the section just below it showed the tinted one. Pinning one
continuous gradient to the viewport on `body` itself means every page,
and the area behind the header, all show the exact same background with
no seam anywhere, regardless of scroll position. `.brand-mesh` still
exists as a separate, bolder utility class for small decorative accents
placed on top of an already-solid background (e.g. the CTA band on Home)
- that's a different use case from page-level tinting.

## Typography

- **Display font**: Sora (headings) - bold, geometric, slightly warm.
- **Body font**: Manrope (everything else) - highly legible at small sizes.
- Both are loaded via Google Fonts `<link>` tags in `index.html` (see
  `docs/05-Deployment-and-Maintenance.md` for why this is a link, not a
  bundled asset).
- Headings use `font-display` (set globally on `h1`-`h6` in
  `src/index.css`); body text uses `font-body` (the `body` default).

## Spacing, radius, shadow

- Section rhythm: `py-16 sm:py-20` for major page sections, `container-page`
  utility class for consistent horizontal gutters and max-width (`78rem`).
- Card radius: `--radius-card` (`1.25rem`), applied via
  `rounded-[var(--radius-card)]`.
- Two shadow levels: `--shadow-soft` (resting state) and `--shadow-lift`
  (hover state) - used consistently across every card and button so hover
  feedback feels the same everywhere.

## Logo

`src/components/ui/LogoMark.tsx` renders the brand mark as a plain `<img>`
pointing at `src/assets/brand/study-station-logo.png` - a supplied 3D
rendered illustration (a brain wearing a mortarboard, in the brand's teal
and coral), autocropped and compressed for the web. It's used borderless
and transparent-background everywhere it appears (navbar, footer, 404
page) - never boxed in a card, per the "no bounding box around the mark"
rule established for the hero visual too. It is deliberately **not** used
in the loader (kept logo-free and minimal) or in the hero (which uses
`PersonIllustration.tsx` instead - see below). `favicon.ico`,
`apple-touch-icon.png`, and `icon-32/192/512.png` are all generated from
this same source image (see `docs/05-Deployment-and-Maintenance.md` for
the exact commands).

## Hero illustration

`src/components/ui/PersonIllustration.tsx` is an inline SVG component (a
person working on a laptop), based on a public-domain vector source and
hand-recolored into the site's teal/coral tokens, with its original
ground-plane shape removed so it renders with a fully transparent
background - no card, no border, no bounding shape - directly on the
page's ambient background (see "Page background" above). It's rendered
mirrored (`-scale-x-100`) in the Home hero specifically so the person
faces toward the headline rather than away from it - a deliberate
compositional choice, not a default orientation of the component itself
(a future placement elsewhere on the site should judge the correct
direction independently).

It's hidden below the `sm` breakpoint (`hidden sm:flex` on its wrapper)
and only reappears at `sm` and up. This is a deliberate trade-off, not an
arbitrary choice: on a phone-sized viewport, the hero content (header
through the stat counters) is sized to fit within the initial `100vh` -
see "Hero viewport fit" below - and a phone simply doesn't have the
spare vertical room to stack the illustration below the text and still
fit. `sm` and up either have the two-column layout (`lg:`) or, in the
sm-to-lg portrait range, enough extra height that stacking it below the
text no longer pushes the fold.

## Hero viewport fit

The Home hero is sized to fill (and not exceed) the space between the
floating header and the bottom of the initial viewport, so "Featured
Courses" only becomes visible once the visitor actually scrolls - never
a sliver of it peeking in on load, never empty space before it either.
Two things make this work together:

- **Height**: the hero section uses
  `min-h-[calc(100vh-5.25rem)] sm:min-h-[calc(100vh-5.75rem)]`, not a
  plain `min-h-screen`. This matters: the hero doesn't start at the true
  top of the viewport, it starts *after* the floating header's own
  height and margin (`5.25rem`/`5.75rem`, matching `Layout.tsx`'s
  `<main>` padding-top exactly). A plain `100vh` section starting that
  far down would always end up with its own bottom edge that far *past*
  the actual fold, regardless of how its content is spaced internally -
  subtracting the header's offset from the target height is what makes
  the section's bottom edge land exactly at the fold.
- **Content**: within that height, the hero's content column uses a
  noticeably tighter mobile rhythm than its `sm:`-and-up sizing (smaller
  heading, a separate shorter one-sentence description shown only below
  `sm` via `sm:hidden`/`hidden sm:inline`, tighter gaps, less section
  padding) so it comfortably fits phone viewports down to about 360px
  wide without needing to be cropped or scrolled to reach the stat
  counters. Content is then vertically centered in the available height
  (`flex flex-col justify-center`) so slack space (when a taller phone
  leaves some) is distributed evenly above and below rather than
  collecting awkwardly at one edge.

## Floating header

The header (`components/layout/Header.tsx`) is a `fixed` element inset
`20px` from the top/left/right of the viewport on every page
(`inset-x-5 top-5`), with its own rounded corners and shadow - a detached,
floating bar rather than a bar spanning the full viewport width. Because of
this, page content can't simply start at "the header's height" the way a
flush-to-the-edge header would - `Layout.tsx`'s `<main>` accounts for the
header's height *plus* its `20px` top margin (`pt-[5.25rem] sm:pt-[5.75rem]`).
If the header's own height or margin ever changes, that padding needs to
change with it.

## Component conventions

- **Buttons** (`components/ui/Button.tsx`): three implementations
  (`Button`, `LinkButton`, `AnchorButton`) sharing one `buttonClasses()`
  style function from `buttonStyles.ts`, so a native `<button>`, an
  internal `<Link>`, and an external `<a>` all look pixel-identical. Four
  variants: `primary` (coral, main CTA), `secondary` (teal), `outline`,
  `ghost`.
- **Cards** (`components/cards/`): every card follows the same shape -
  `data-reveal` attribute for scroll animation, `id={item.id}` so search
  results and category links can deep-link + scroll to a specific card
  (`scroll-mt-24` offsets for the fixed header), consistent hover lift
  (`hover:-translate-y-1 hover:shadow-lift`).
- **Empty/error states**: `EmptyState` and `ErrorState` in
  `components/ui/` are the only two "nothing to show" patterns in the app -
  every filtered-to-zero view and every form error reuses one of these
  instead of a bespoke message.
- **Scrollbar**: styled globally in `index.css` (`::-webkit-scrollbar` +
  Firefox's `scrollbar-color`) to a teal thumb on a soft paper track,
  instead of the OS default, on every scrollable surface in the app.
- **Selects**: `components/ui/Select.tsx` is a fully custom listbox, not a
  styled native `<select>` - the trigger, the open panel, and every option
  are our own markup (the `.select-field` class in `index.css` still
  supplies the shared trigger look - rounded, teal-bordered, custom
  chevron - reused from the input styling). This exists because a native
  `<select>`'s open option list is rendered by the browser/OS itself and
  can't be restyled with CSS at all; replacing the whole control was the
  only way to theme it end to end. The trigger button stays focused the
  entire time (including while open) and drives the interaction through
  one `onKeyDown` handler - arrow keys move a visual "active" option
  tracked in state and exposed via `aria-activedescendant`, rather than
  moving real focus into the list.

## Motion principles

- Motion should clarify hierarchy (what appeared, in what order), not
  decorate for its own sake. Hero content animates in sequence
  (eyebrow → heading → copy → CTAs → illustration → stats) via one GSAP
  timeline; content grids fade+lift in as they scroll into view, staggered
  by ~0.08s per card.
- Everything animated respects `prefers-reduced-motion`: `useReducedMotion()`
  is checked before any GSAP tween runs, and a global CSS rule in
  `src/index.css` collapses all transition/animation durations to near-zero
  for users with the OS-level preference set, as a safety net.
- The entry `Loader` (`components/ui/Loader.tsx`) is intentionally
  minimal - a single spinner (`components/ui/Spinner.tsx`), nothing else -
  so it reads as a brief loading beat rather than a splash screen.
  `Root.tsx` coordinates with it via an `onFinished` callback: once the
  loader finishes its own fade-out, the main app content cross-fades in
  (`transition-opacity duration-500`) rather than appearing in an instant
  cut. Both steps are skipped for `prefers-reduced-motion`.
- In-app navigation gets the same "loading beat, then fade in" treatment,
  not just the initial page load: `Layout.tsx` detects a real route change
  (comparing `pathname` against a `settledPathname` it holds, adjusted
  during render rather than in an effect - see the comment there for why),
  shows `PageTransitionOverlay` (the same `Spinner`, reused) for a fixed
  ~1s window, then fades the new page in the same way `Root.tsx` fades in
  the very first load. Skipped entirely for `prefers-reduced-motion` -
  the route just settles immediately with no overlay or delay.
  Hiding and revealing `<main>` are deliberately asymmetric: hiding is
  instant (no CSS transition at all, via the `instantHide` flag), because
  `<Outlet/>` has already swapped in the new page's DOM by the time the
  overlay mounts - animating that hide over any duration would mean the
  new page is genuinely visible, fading, for that whole window. Only the
  *reveal*, once the overlay's ~1s window ends, is an animated fade-in.
- The animated stat counters on Home (`useCountUp` in `src/hooks/`) count
  up with an ease-out curve over ~1.1s, starting shortly after the hero
  mounts. They're deliberately placed to land above the fold (see the
  Home hero's compact vertical spacing) since there's no scroll-in moment
  to trigger them otherwise. Reduced-motion renders the final value
  immediately, no counting.
- The mobile nav drawer opens from the **left edge** of the screen
  (`components/layout/MobileNav.tsx`), not the right - a deliberate
  layout choice for this app, consistent everywhere the drawer appears.
- **Filtered/searched grids** (Courses, Resources, Tutorials) animate
  additions and removals instead of snapping instantly, via Framer
  Motion: `components/ui/AnimatedGridItem.tsx` wraps each card, and the
  page wraps the `.map()` of those in `<AnimatePresence mode="popLayout">`.
  A card that stops matching the filter fades + scales down (`opacity: 1
  → 0`, `scale: 1 → 0.92`) over 250ms before it's actually removed from
  the DOM; a newly-matching card fades + scales up the same way; every
  card has `layout` enabled so surviving siblings smoothly slide into the
  gap a removed card leaves, instead of the grid reflowing instantly
  (Framer Motion's FLIP implementation, not a hand-rolled one).
  `mode="popLayout"` on the `AnimatePresence` is what lets that reflow
  start immediately rather than waiting for the exiting card's own
  animation to finish. Each of the three pages also wraps its own
  grid-vs-empty-state swap (all filters returning zero results) in a
  *second*, outer `AnimatePresence`, since that's a different pair of
  elements being swapped, not an addition/removal within the same list -
  a single `AnimatePresence` only tracks its own direct children, so
  animating both the individual cards *and* the whole-grid-vs-empty-state
  swap genuinely needs two, nested.

  One non-obvious gotcha worth documenting: the app-wide
  `<MotionConfig reducedMotion="user">` (`Root.tsx`) does **not** disable
  this animation for `prefers-reduced-motion` users on its own. Framer
  Motion's built-in reduced-motion handling only suppresses the
  *positional* part of `layout` animations (the FLIP reflow) - it
  deliberately leaves explicit `initial`/`animate`/`exit` props alone,
  since those are treated as intentional rather than incidental motion.
  `AnimatedGridItem` therefore also checks the app's own
  `useReducedMotion()` hook directly and zeroes the transition duration
  itself, the same way every other animation in the app does - don't
  assume `MotionConfig` alone is sufficient for a new Framer Motion
  animation; verify it against `useReducedMotion()` explicitly.

## Accessibility baseline

- Every interactive element has a visible focus ring
  (`:focus-visible` → coral outline, defined globally).
- All images use empty `alt=""` where the image is purely decorative
  (thumbnails next to a text title) or a descriptive `alt` where the image
  is the only content (the logo mark: `alt="Study Station"`).
- The mobile nav and search overlay are proper dialogs (`role="dialog"`,
  `aria-modal="true"`, `Escape` to close on keyboard-equipped devices,
  focus moved to the first interactive element on open). The search
  overlay's close control shows the text "Esc" only at `sm:` and above -
  on touch/mobile widths it renders as an `×` icon instead, since phones
  don't have an Escape key.
- Color contrast: body text uses `--color-ink-700`/`900` on
  `--color-paper`/white, both well above WCAG AA for normal text.
