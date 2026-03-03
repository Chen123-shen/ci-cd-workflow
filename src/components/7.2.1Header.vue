<template>
  <header class="header">
    <h1>我的商城</h1>
    <div class="cart-icon">
      <!-- 购物车图标（用文字替代，新手易理解） -->
      🛒 
      <!-- 显示购物车数量（绑定 Store 的 cartCount） -->
      <span class="cart-count" v-if="cartStore.cartCount > 0">
        {{ cartStore.cartCount }}
      </span>
    </div>
  </header>
</template>

<script setup>
// 导入并使用购物车 Store
import { useCartStore } from '../stores/7.2cartStore'
const cartStore = useCartStore()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
}
.cart-icon {
  font-size: 20px;
  position: relative;
  cursor: pointer;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 50%;
}
</style>