import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src/components', 'src/index.ts'],
      insertTypesEntry: true 
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'CommonCoreComponents',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'umd' ? 'umd.js' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
