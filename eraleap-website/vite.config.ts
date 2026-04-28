import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // This repo is a GitHub *user site* (eraleap.github.io), so assets must be served from root.
  base: '/',
  plugins: [vue()],
})
