<template>
  <div class="child-container">
    <div class="form-item" :style="{color: favoriteColor}">
      <label>子组件 - 偏好颜色：</label>
      <select v-model="favoriteColor">
        <option value="red">红色</option>
        <option value="blue">蓝色</option>
        <option value="green">绿色</option>
      </select>
    </div>
    <div class="form-item">
      <label>子组件 - 已保存的列表：</label>
      <input v-model="newItem" @keyup.enter="addItem" placeholder="输入后按回车添加" />
      <ul>
        <li v-for="(item, index) in favoriteList" :key="index" :style="{color: favoriteColor}">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 引入封装的 useLocalStorage 函数
import { useLocalStorage } from './6.2.1useLocalStorage'
import { ref } from 'vue'

// 1. 用 useLocalStorage 管理偏好颜色（默认值：blue）
const favoriteColor = useLocalStorage('favorite-color', 'blue')

// 2. 用 useLocalStorage 管理列表数据（默认值：空数组）
const favoriteList = useLocalStorage('favorite-list', [])

// 临时 ref，用于添加列表项
const newItem = ref('')

// 添加列表项的方法
const addItem = () => {
  if (newItem.value.trim()) {
    favoriteList.value.push(newItem.value.trim())
    newItem.value = ''
  }
}
</script>

<style scoped>
.child-container {
  padding: 10px;
}
select, input {
  padding: 6px;
}
ul {
  margin: 10px 0;
  padding-left: 20px;
}
li {
  margin: 5px 0;
}
</style>