import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // 根据环境动态配置 base 路径
  // 开发环境（npm run dev）用相对路径 ./，本地构建双击能打开
  // 生产环境（npm run build）用仓库名路径，适配 GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/ci-cd-workflow/' : './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 增强构建配置，确保资源路径更稳定
  build: {
    rollupOptions: {
      output: {
        // 统一资源输出路径，避免路径混乱
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }
})