import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://short.yuluo.link', // Your API server domain
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Remove the "/api" prefix before making the request
      },
    },
  },
})
