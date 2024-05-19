/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/open-weather-forecast/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
}))
