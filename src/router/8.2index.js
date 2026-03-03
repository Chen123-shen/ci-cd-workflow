import { createRouter, createWebHistory } from 'vue-router'
// 导入页面组件
import ProductList from '../views/8.2.1ProductList.vue'
import ProductDetail from '../views/8.2.2ProductDetail.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList // 商品列表页
  },
  {
    path: '/product/:id', // 动态路由，:id 是参数占位符
    name: 'ProductDetail',
    component: ProductDetail // 商品详情页
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vue3 + Vite 环境配置
  routes
})

export default router