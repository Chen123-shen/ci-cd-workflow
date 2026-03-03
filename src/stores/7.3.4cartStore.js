import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    // 购物车列表：[{ productId, name, price, quantity }]
    cartItems: [],
    // 总金额
    totalPrice: 0
  }),

  getters: {
    // 购物车商品总数
    cartItemCount: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  },

  actions: {
    // 添加商品到购物车（依赖 userStore 和 productStore）
    addToCart(productId, quantity = 1) {
      // 关键：在函数内部动态引入其他 Store，避免循环依赖
      const userStore = useUserStore()
      const productStore = useProductStore()

      // 1. 校验用户是否登录
      if (!userStore.isLogin) {
        alert('请先登录！')
        return
      }

      // 2. 查找商品信息
      const product = productStore.productList.find(item => item.id === productId)
      if (!product) {
        alert('商品不存在！')
        return
      }

      // 3. 校验库存
      if (product.stock < quantity) {
        alert('库存不足！')
        return
      }

      // 4. 添加/更新购物车
      const existingItem = this.cartItems.find(item => item.productId === productId)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.cartItems.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity
        })
      }

      // 5. 更新总金额
      this.calcTotalPrice()
      console.log(`商品 ${product.name} 已加入购物车`)
    },

    // 计算购物车总金额
    calcTotalPrice() {
      this.totalPrice = this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },

    // 清空购物车
    clearCart() {
      this.cartItems = []
      this.totalPrice = 0
    }
  }
})

// 注意：这里需要提前声明引入（解决函数内部使用的语法提示）
import { useUserStore } from './7.3.2userStore'
import { useProductStore } from './7.3.3productStore'