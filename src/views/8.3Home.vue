<template>
  <div class="home-container">
    <h1>Vue3 路由守卫示例 - 首页</h1>
    <div class="nav-links">
      <!-- 跳转到登录页 -->
      <router-link to="/login" class="link">前往登录页</router-link>
      <!-- 跳转到管理员页面（会触发路由守卫校验） -->
      <router-link to="/admin" class="link">前往管理员页面</router-link>
    </div>
    <p class="tip">
      未登录时点击「前往管理员页面」会自动跳转到登录页；登录后可正常访问管理员页面。
    </p>
  </div>
</template>

<script setup>
// 首页无需复杂逻辑，仅展示页面结构和导航链接
</script>

<style scoped>
.home-container {
  width: 600px;
  margin: 100px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.nav-links {
  margin: 30px 0;
}

.link {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.link:hover {
  background-color: #359469;
}

.tip {
  color: #666;
  margin-top: 20px;
}
</style>