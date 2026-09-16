/**
 * Resolves a `public/` asset path against Vite's configured base URL.
 *
 * Why this is needed: Vite rewrites root-relative asset URLs it can see at
 * build time - `href`/`src` attributes in `index.html`, `url()` in CSS,
 * and anything imported as a module - to sit under `base`. It cannot
 * rewrite plain runtime strings like the `image:` fields in
 * `src/data/*.ts`, because those are just string literals it has no way
 * to distinguish from ordinary data. Left alone, `/images/foo.jpg` would
 * resolve against the domain root and 404 on a GitHub Pages project site
 * served from `/study-station/`.
 *
 * `import.meta.env.BASE_URL` always ends in a slash and reflects whatever
 * `base` the current build used ("/" locally and on Vercel/Netlify,
 * "/study-station/" for the GitHub Pages build - see
 * docs/05-Deployment-and-Maintenance.md). Nothing here hardcodes a repo
 * name, so the same source works in every environment.
 *
 * Only use this for files that live in `public/`. Assets under
 * `src/assets/` should be imported normally (`import logo from
 * "../assets/brand/logo.png"`) - Vite hashes and rewrites those itself,
 * and passing an already-resolved import through here would double up the
 * base path.
 */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
