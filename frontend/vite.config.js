import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Payment-system/',
  plugins: [ nodePolyfills(),react()],
  Buffer: "buffer",build: {
    outDir: 'dist'
  }
})


