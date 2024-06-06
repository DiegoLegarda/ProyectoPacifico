import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "env": {
    "REACT_APP_API_URL": "https://servidor-gilt.vercel.app"
  }
})
