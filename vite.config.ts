import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Vercel and Netlify serve the app from the domain root, so the default
// base path of "/" is correct there out of the box.
// GitHub Pages project sites serve from "/<repo-name>/", so the deploy
// workflow sets VITE_BASE_PATH before building (see .github/workflows/deploy.yml).
// React Router reads this same value at runtime via import.meta.env.BASE_URL.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
