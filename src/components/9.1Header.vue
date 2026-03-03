<template>
  <header class="layout-header">
    <button 
      class="toggle-btn" 
      @click="handleToggleSidebar"
    >
      {{ isCollapse ? '🡢' : '🡠' }}
    </button>
    <div class="header-title">中后台管理系统</div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 接收折叠状态
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 定义触发折叠的事件
const emit = defineEmits(['toggle-sidebar'])

// 点击切换按钮触发事件
const handleToggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>

<style scoped>
.layout-header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #165DFF;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.toggle-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.2s;
}

.toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.header-title {
  font-size: 18px;
  font-weight: 600;
}
</style>