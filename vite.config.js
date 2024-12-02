import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
})
