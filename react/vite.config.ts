/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/stories/**/*',
        '**/tests/**/*',
      ],
    }),
  ],
  build: {
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/Glyphon.tsx'),
      name: 'glyphon',
      formats: ['es'],
      fileName: (format) => `glyphon.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts'
  },
})
