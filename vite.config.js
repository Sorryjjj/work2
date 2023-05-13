import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url))

    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      //代理所有 /api 的请求
      "/api": {
        // 代理请求之后的请求地址
        rewrite: (path) => path.replace(/^\/api/, ''),
        target: "http://localhost:26659",
        // 跨域配置
        changeOrigin: true
      }
    }
  },


})
