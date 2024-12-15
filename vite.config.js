import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // Usar esbuild para minificar el código (más rápido)
    sourcemap: true,    // Generar mapas de fuente para depuración
  }
})
