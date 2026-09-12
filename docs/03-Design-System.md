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
hero's `brand-mesh` background.

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
- **Selects**: the `.select-field` utility class (`index.css`) hides the
  native control's default appearance and draws a custom teal chevron, so
  closed dropdowns match the app's rounded, teal-bordered inputs. Note the
  open dropdown *panel* (the list of options) is still rendered by the
  browser/OS - CSS can't restyle that part cross-browser without replacing
  `<select>` with a fully custom JS listbox, which wasn't warranted for the
  one sort control currently in the app.

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
  logo-free - a single spinner and a small wordmark, nothing more - so it
  reads as a brief loading beat rather than a splash screen. `Root.tsx`
  coordinates with it via an `onFinished` callback: once the loader
  finishes its own fade-out, the main app content cross-fades in
  (`transition-opacity duration-500`) rather than appearing in an instant
  cut. Both steps are skipped for `prefers-reduced-motion`.
- The mobile nav drawer opens from the **left edge** of the screen
  (`components/layout/MobileNav.tsx`), not the right - a deliberate
  layout choice for this app, consistent everywhere the drawer appears.

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
