import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    // 商品列表
    productList: [],
    // 当前选中商品
    currentProduct: null,
    // 加载状态
    loading: false
  }),

  actions: {
    // 模拟获取商品列表（异步）
    async fetchProductList() {
      this.loading = true
      try {
        // 模拟接口请求
        const mockData = [
          { id: 1, name: 'Vue 实战教程', price: 99, stock: 100 },
          { id: 2, name: 'Pinia 入门指南', price: 59, stock: 50 }
        ]
        // 模拟异步延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.productList = mockData
      } catch (error) {
        console.error('获取商品列表失败：', error)
      } finally {
        this.loading = false
      }
    },

    // 设置当前选中商品
    setCurrentProduct(productId) {
      this.currentProduct = this.productList.find(item => item.id === productId)
    }
  }
})