import { defineStore } from 'pinia'

// 定义用户 Store，id 为 "user"（全局唯一）
export const useUserStore = defineStore('user', {
  // 状态：存储用户基础信息
  state: () => ({
    userId: '',
    username: '',
    token: '',
    isLogin: false
  }),

  // 计算属性：基于状态的派生数据
  getters: {
    // 获取用户昵称（空值处理）
    userNickname: (state) => state.username || '未登录用户'
  },

  // 方法：修改状态的逻辑（同步/异步）
  actions: {
    // 登录操作
    login(userInfo) {
      this.userId = userInfo.userId
      this.username = userInfo.username
      this.token = userInfo.token
      this.isLogin = true
      console.log(`用户 ${this.username} 登录成功`)
    },

    // 退出登录
    logout() {
      // 重置状态（Pinia 内置方法）
      this.$reset()
      console.log('用户已退出登录')
    }
  }
})