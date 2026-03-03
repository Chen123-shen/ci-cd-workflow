import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/8.3index.js' // 导入路由配置
import App from './App.vue'

const app = createApp(App)
app.use(createPinia()) // 注册 Pinia
app.use(router) // 注册路由
app.mount('#app')