import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  base: "/countdown-timers/",
  plugins: [react()]
})
