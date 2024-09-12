import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirnme = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  // assetsInclude: ['**/*.gif'],
  resolve: {
    alias: {
      '@': resolve(__dirnme, 'src'),
    },
  },  
  plugins: [react()],
})
