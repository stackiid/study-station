# 05 - Deployment & Maintenance

This project is a static site after `npm run build` (output in `dist/`) -
it can be hosted anywhere that serves static files. Config is included for
the three most common options.

## Local development

```bash
npm install
npm run dev       # starts Vite dev server with hot reload
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview     # serves the production build locally, for a final check
npm run lint          # runs oxlint across the whole src/ tree
```

## Deploying to Vercel

`vercel.json` is already configured:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Import the repo in the Vercel dashboard (or run `vercel`) - no other
configuration is needed. The rewrite rule is required because this is a
client-side-routed SPA: without it, a direct visit to `/courses` would
404 at the server level before React Router ever runs.

## Deploying to Netlify

`netlify.toml` mirrors the same idea:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Connect the repo in the Netlify dashboard, or run `netlify deploy`. Same
reasoning as Vercel: the redirect makes every path fall back to
`index.html` so client-side routing can take over.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys automatically on every
push to `main`, using GitHub's official Pages Actions. Two things are
specific to GitHub Pages and handled in the workflow:

1. **Sub-path base URL.** GitHub Pages project sites are served from
   `https://<username>.github.io/<repo-name>/`, not the domain root. The
   workflow sets `VITE_BASE_PATH: /${{ github.event.repository.name }}/`
   before building, which Vite's `base` config picks up
   (`vite.config.ts`), and which React Router reads at runtime via
   `import.meta.env.BASE_URL` (`Root.tsx`). Vercel and Netlify don't set
   this variable, so they default to `/` (domain root) automatically.
2. **SPA fallback.** GitHub Pages has no server-side rewrite mechanism, so
   the workflow copies `dist/index.html` to `dist/404.html` after building.
   GitHub Pages serves `404.html` for any unmatched path, which is
   actually the app shell - React Router then reads the URL and renders
   the right page client-side.

To enable it: in the repo's Settings → Pages, set the source to
"GitHub Actions." No further setup is required - the workflow handles the
rest on the next push to `main`.

## Environment variables / secrets

This project has none. The Formspree endpoint and contact email are
public-facing values (site content, not secrets) and live directly in
`src/data/site.ts`. There's no API key, database URL, or auth token
anywhere in the codebase.

## Regenerating brand assets

The favicon set is generated from the single SVG source at
`src/assets/brand/logo-mark.svg` using `rsvg-convert` and ImageMagick. If
the logo ever changes, regenerate everything in `public/` with:

```bash
cd public
rsvg-convert -w 16 -h 16 favicon.svg -o /tmp/icon-16.png
rsvg-convert -w 32 -h 32 favicon.svg -o /tmp/icon-32.png
rsvg-convert -w 48 -h 48 favicon.svg -o /tmp/icon-48.png
rsvg-convert -w 256 -h 256 favicon.svg -o /tmp/icon-256.png
convert /tmp/icon-16.png /tmp/icon-32.png /tmp/icon-48.png /tmp/icon-256.png favicon.ico
rsvg-convert -w 180 -h 180 -b "#F5F2EA" favicon.svg -o apple-touch-icon.png
```

(`favicon.svg` in `public/` should stay identical to
`src/assets/brand/logo-mark.svg` - the former is what browsers request
directly; the latter is what `LogoMark.tsx` inlines into the page.)

## Optimizing new course/tutorial images

Course and tutorial thumbnails are re-encoded before committing, to keep
the site fast. The command used for every image currently in
`public/images/`:

```bash
convert original.jpg -resize '900x900>' -background '#FAF7F0' -flatten -strip -quality 80 optimized.jpg
```

This caps the longest edge at 900px, flattens any transparency onto the
brand's paper background color, strips metadata, and re-encodes at 80%
JPEG quality - every existing thumbnail is under 80KB as a result.

## Why Google Fonts is a `<link>`, not a bundled dependency

Font Awesome is bundled via npm (`@fortawesome/fontawesome-free`) so icons
never depend on a CDN being reachable. Google Fonts is left as a
`<link rel="stylesheet">` in `index.html` instead, because: it's one of
the most reliable, widely-cached CDNs on the web (most visitors already
have these exact font files cached from another site), self-hosting would
add real bundle weight for two full type families, and Google Fonts
already serves format-negotiated, subset-optimized files per browser. If
fully offline-capable builds ever become a requirement, swap this for
`@fontsource/sora` and `@fontsource/manrope` (self-hostable, MIT-licensed
mirrors of the same families).

## Ongoing maintenance

- **Broken links**: since nearly every card links to a third-party site,
  links will occasionally break as external content moves or is taken
  down. There's no automated link checker in this repo yet - a good
  addition would be a scheduled GitHub Action that runs a link-checking
  script (e.g. `lychee`) against every `url` in `src/data/*.ts` and opens
  an issue on failures.
- **Dependency updates**: run `npm outdated` periodically. GSAP, React
  Router, and Tailwind are the dependencies most likely to ship breaking
  changes worth reading release notes for before upgrading.
