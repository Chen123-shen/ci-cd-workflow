<template>
  <div class="product-detail">
    <h2>商品详情页</h2>
    <!-- 显示加载状态（可选） -->
    <div v-if="!product">加载中...</div>
    <!-- 显示商品信息 -->
    <div v-else>
      <p>商品ID：{{ product.id }}</p>
      <p>商品名称：{{ product.name }}</p>
      <p>商品价格：¥{{ product.price }}</p>
      <button @click="goBack">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted , watch} from 'vue'

// 获取当前路由信息（包含参数）
const route = useRoute()
const router = useRouter()

// 定义商品数据
const product = ref(null)

// 模拟根据ID获取商品数据的方法
const getProductById = (id) => {
  // 实际项目中这里会调用接口请求数据
  const productList = [
    { id: 123, name: 'Vue 实战教程', price: 89 },
    { id: 456, name: 'React 入门指南', price: 79 },
    { id: 789, name: 'JavaScript 高级编程', price: 99 }
  ]
  return productList.find(item => item.id === Number(id))
}

// 页面挂载时获取商品数据
onMounted(() => {
  // 从路由参数中获取id（route.params.id 是字符串，建议转成数字）
  const productId = route.params.id
  product.value = getProductById(productId)
})

// 监听路由参数变化（如果从详情页1跳转到详情页2，需要重新获取数据）
watch(
  () => route.params.id,
  (newId) => {
    product.value = getProductById(newId)
  }
)

// 返回列表页
const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.product-detail {
  padding: 20px;
}
button {
  margin-top: 20px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>