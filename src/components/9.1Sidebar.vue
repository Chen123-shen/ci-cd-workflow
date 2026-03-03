<template>
  <aside 
    class="layout-sidebar"
    :style="{ width: isCollapse ? '60px' : '220px' }"
  >
    <div class="sidebar-menu">
      <!-- 菜单示例 -->
      <div class="menu-item" v-for="item in menuList" :key="item.id">
        <span class="menu-icon">{{ item.icon }}</span>
        <span class="menu-text" v-show="!isCollapse">{{ item.name }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

// 接收折叠状态
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 模拟菜单数据
const menuList = reactive([
  { id: 1, name: '首页', icon: '🏠' },
  { id: 2, name: '用户管理', icon: '👥' },
  { id: 3, name: '权限设置', icon: '🔑' },
  { id: 4, name: '数据统计', icon: '📊' },
  { id: 5, name: '系统配置', icon: '⚙️' }
])
</script>

<style scoped>
.layout-sidebar {
  background-color: #091E42;
  color: white;
  height: calc(100vh - 60px);
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar-menu {
  padding-top: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.menu-text {
  margin-left: 16px;
  font-size: 14px;
}
</style>