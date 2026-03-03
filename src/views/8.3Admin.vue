<template>
  <div class="admin-container">
    <h2>管理员后台页面</h2>
    <p>只有登录后才能看到这个页面！</p>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 退出登录：清除登录状态并跳转到首页
const handleLogout = () => {
  localStorage.removeItem('userToken')
  router.push('/')
}
</script>

<style scoped>
.admin-container {
  width: 500px;
  margin: 100px auto;
  text-align: center;
}
button {
  padding: 8px 20px;
  cursor: pointer;
  margin-top: 20px;
}
</style>