import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件（可根据你的实际组件路径调整）
import Login from '../views/8.3Login.vue'
import Admin from '../views/8.3Admin.vue'
import Home from '../views/8.3Home.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false } // 无需登录即可访问
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false } // 登录页本身无需权限
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true } // 标记该路由需要登录权限
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  // 模拟判断登录状态：实际项目中可从 Pinia/Vuex 或 localStorage 获取
  // 比如：const isLogin = localStorage.getItem('token') ? true : false
  const isLogin = !!localStorage.getItem('userToken')

  // 判断目标路由是否需要登录权限
  if (to.meta.requiresAuth) {
    // 需要权限：已登录则放行，未登录跳转到登录页
    if (isLogin) {
      next()
    } else {
      next('/login') // 跳转到登录页
    }
  } else {
    // 不需要权限，直接放行
    next()
  }
})

export default router