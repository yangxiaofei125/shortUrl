import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://short.yuluo.link:8080', // Your API server domain
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the "/api" prefix before making the request
      },
    },
  },
})
