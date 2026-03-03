import { defineStore } from 'pinia'

// 定义并导出购物车 Store
export const useCartStore = defineStore('cart', {
  // state：存储购物车的核心状态（响应式）
  state: () => ({
    cartItems: [], // 购物车商品列表
  }),

  // getters：基于 state 计算派生状态（类似组件的 computed）
  getters: {
    // 计算购物车商品总数
    cartCount() {
      // 累加所有商品的数量
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
  },

  // actions：修改 state 的方法（支持同步/异步）
  actions: {
    // 加入购物车的方法
    addToCart(product) {
      // 先查找购物车中是否已有该商品
      const existingItem = this.cartItems.find(item => item.id === product.id)
      
      if (existingItem) {
        // 已有该商品，数量+1
        existingItem.quantity++
      } else {
        // 没有该商品，新增条目（默认数量1）
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },
  },
})