<template>
  <div class="data-list">
    <h3>获取到的5条数据：</h3>
    <ul>
      <!-- 遍历展示每条数据 -->
      <li v-for="item in list" :key="item.id">
        {{ item.id }} - {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// 1. 定义接收父组件的 props
const props = defineProps({
  // 限定 list 为数组类型，且必传
  list: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.data-list {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px 0;
  border-bottom: 1px dashed #ddd;
  color: #333;
}
</style>