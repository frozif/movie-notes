import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) =>{
  const isProd = mode ==='production'
return {
  base: isProd ? '/movie-notes/' : '/',
    plugins: [react()],
  resolve: {
  alias: {
  '@': path.resolve(__dirname, './src')
  }
  }
}
})


