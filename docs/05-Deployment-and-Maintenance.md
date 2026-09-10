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

The logo is a raster illustration, not a vector - `src/assets/brand/study-station-logo.png`
is the single source of truth, imported directly by `LogoMark.tsx`. If it
ever changes, regenerate every derived asset in `public/` from the new
source with ImageMagick (autocrop transparent padding first, then export
each size):

```bash
# 1. Autocrop transparent padding and add a little breathing room
python3 - <<'PY'
from PIL import Image
img = Image.open("new-logo-source.png").convert("RGBA")
cropped = img.crop(img.getbbox())
pad = int(max(cropped.size) * 0.03)
canvas = Image.new("RGBA", (cropped.width + pad*2, cropped.height + pad*2), (0,0,0,0))
canvas.paste(cropped, (pad, pad), cropped)
canvas.save("logo-cropped.png")
PY

# 2. In-app master (used by LogoMark.tsx via src/assets/brand/) - resize + compress
convert logo-cropped.png -resize 512x512 study-station-logo.png
pngquant --quality=75-95 --strip --force study-station-logo.png
mv study-station-logo-fs8.png src/assets/brand/study-station-logo.png

# 3. Square-pad for favicon generation (icons look off-center without this
#    if the source isn't already square)
python3 - <<'PY'
from PIL import Image
img = Image.open("logo-cropped.png").convert("RGBA")
side = int(max(img.size) * 1.08)
square = Image.new("RGBA", (side, side), (0,0,0,0))
square.paste(img, ((side-img.width)//2, (side-img.height)//2), img)
square.save("logo-square.png")
PY

# 4. Export every favicon size + the .ico + apple-touch-icon
for size in 16 32 48 192 256 512; do
  convert logo-square.png -resize ${size}x${size} icon-${size}.png
done
convert icon-16.png icon-32.png icon-48.png icon-256.png favicon.ico
convert logo-square.png -resize 180x180 -background "#FAF7F0" -flatten apple-touch-icon.png
pngquant --quality=75-95 --strip --force --ext .png icon-32.png icon-192.png icon-512.png apple-touch-icon.png

# 5. Copy the results into public/
cp favicon.ico apple-touch-icon.png icon-32.png icon-192.png icon-512.png public/
```

`index.html` references `icon-32.png`, `icon-192.png`, `favicon.ico`
(legacy fallback), and `apple-touch-icon.png` by exact filename - keep
those names if you regenerate, or update the `<link>` tags in `index.html`
to match new ones.

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
