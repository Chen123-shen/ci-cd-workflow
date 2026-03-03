<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <ul>
      <!-- 循环渲染商品列表，点击跳转到详情页 -->
      <li v-for="product in productList" :key="product.id" @click="goToDetail(product.id)">
        {{ product.name }} - ¥{{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 模拟商品数据
const productList = [
  { id: 123, name: 'Vue 实战教程', price: 89 },
  { id: 456, name: 'React 入门指南', price: 79 },
  { id: 789, name: 'JavaScript 高级编程', price: 99 }
]

// 获取路由实例
const router = useRouter()

// 跳转详情页的方法
const goToDetail = (id) => {
  // 方式1：通过路径跳转（推荐）
  router.push(`/product/${id}`)
  
  // 方式2：通过命名路由跳转（更优雅，参数单独传递）
  // router.push({ name: 'ProductDetail', params: { id } })
}
</script>

<style scoped>
.product-list {
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border: 1px solid #eee;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
}
li:hover {
  background-color: #f5f5f5;
}
</style>