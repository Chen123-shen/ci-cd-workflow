// 生成一个Vue3的计数器组件，包含加/减按钮
<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>
<style scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>