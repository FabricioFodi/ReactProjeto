import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tabela': 'http://localhost:5000' // Redireciona requisições para o backend
    }
  },
})

