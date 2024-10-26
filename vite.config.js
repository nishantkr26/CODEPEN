import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 3000, // Default to 3000 if PORT isn't set
    host: true, // Allows network exposure, necessary for Render
  },
})
