import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode })=>{
  const isTest = mode === 'test';

  return {
    plugins: [
      !isTest && TanStackRouterVite(),
      tsconfigPaths(),
      react(),
      tailwindcss()
    ],
  }})
