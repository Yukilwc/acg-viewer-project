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
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/tools.scss";' // 添加公共样式
      }
    }
  },
  build: {
    target: 'es2015'
  },
})
