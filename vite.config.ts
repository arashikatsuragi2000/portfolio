import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages project site: https://arashikatsuragi2000.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
