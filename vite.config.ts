import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx({}),
  ],
  server: {
    host: "0.0.0.0"
  },
  css: {
    modules: {
      scopeBehaviour: "local"
    }
  },
  build: {
    target: 'es2015'
  },
})
