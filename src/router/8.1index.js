import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/8.1.1Home.vue'
import About from '../views/8.1.2About.vue'
import Contact from '../views/8.1.3Contact.vue'

const routeRules  = [
    {
        path: '/',
        name: 'Home',
        component: Home //这里的 Home 是上面 import 的 Home 组件
    },
    {   path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 基于 HTML5 History 模式
    routes: routeRules
})

export default router