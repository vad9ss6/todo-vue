import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/todo-vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
