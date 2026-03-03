<template>
  <div class="login-container">
    <h2>登录页面</h2>
    <button @click="handleLogin">模拟登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟登录：存储登录令牌到localStorage
const handleLogin = () => {
  // 实际项目中这里会调用登录接口，获取token后存储
  localStorage.setItem('userToken', 'fake-token-123456')
  // 登录成功后跳转到admin页面
  router.push('/admin')
}
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}
button {
  padding: 8px 20px;
  cursor: pointer;
}
</style>