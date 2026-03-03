<template>
  <div class="product-list">
    <div class="product-item" v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>价格：¥{{ product.price }}</p>
      <button @click="handleAddToCart(product)">加入购物车</button>
    </div>
  </div>
</template>

<script setup>
// 导入并使用购物车 Store
import { useCartStore } from '../stores/7.2cartStore'
const cartStore = useCartStore()

// 模拟商品数据（新手可直接用）
const products = [
  { id: 1, name: 'Vue3 入门教程', price: 59 },
  { id: 2, name: 'Pinia 实战指南', price: 69 },
  { id: 3, name: '前端面试宝典', price: 89 },
]

// 点击“加入购物车”的处理函数
const handleAddToCart = (product) => {
  // 调用 Store 的 addToCart 方法
  cartStore.addToCart(product)
  // 提示用户（可选，提升体验）
  alert(`${product.name} 已加入购物车！`)
}
</script>

<style scoped>
.product-list {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.product-item {
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 5px;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background: #359469;
}
</style>