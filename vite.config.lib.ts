import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Library build configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KilluaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `killua-ui.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Global variables for UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        // Preserve CSS imports
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'killua-ui.css';
          return assetInfo.name || 'asset';
        }
      }
    },
    outDir: 'dist/lib',
    sourcemap: true,
    // Don't minify for better debugging
    minify: false,
    // Clear output dir before build
    emptyOutDir: true
  }
})
