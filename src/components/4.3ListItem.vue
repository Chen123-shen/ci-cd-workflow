<!-- ListItem.vue -->
<template>
  <div class="list-item">
    {{ item.content }}
  </div>
</template>

<script setup>
// 定义接收的 props，明确数据类型和必要性
const props = defineProps({
  item: {
    type: Object,
    required: true, // 必须传递 item 数据
    default: () => ({})
  }
})
</script>

<style scoped>
/* 列表项样式：固定高度，和父组件定义的 itemHeight 一致 */
.list-item {
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid #f3f4f6;
  box-sizing: border-box;
}

.list-item:last-child {
  border-bottom: none;
}
</style>