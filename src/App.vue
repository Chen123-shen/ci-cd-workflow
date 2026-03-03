<template>
  <div class="layout-container">
    <!-- 头部 -->
    <Header 
      :is-collapse="isCollapse"
      @toggle-sidebar="toggleSidebar"
    />
    
    <!-- 主体部分：侧边栏 + 内容区 -->
    <div class="layout-main">
      <!-- 侧边栏 -->
      <Sidebar :is-collapse="isCollapse" />
      
      <!-- 内容区 -->
      <main class="layout-content">
        <div class="content-wrapper">
          <h2>内容区域</h2>
          <p>这是中后台系统的主要内容展示区域</p>
          <p>侧边栏折叠状态：{{ isCollapse ? '已折叠' : '已展开' }}</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/9.1Header.vue'
import Sidebar from '@/components/9.1Sidebar.vue'

// 控制侧边栏折叠状态的ref
const isCollapse = ref(false)

// 切换侧边栏折叠状态
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-main {
  display: flex;
  flex: 1;
}

.layout-content {
  flex: 1;
  padding: 20px;
  background-color: #F5F7FA;
  overflow-y: auto;
}

.content-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>