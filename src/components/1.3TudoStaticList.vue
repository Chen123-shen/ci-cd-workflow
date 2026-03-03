<template>
  <div>
    <h2>静态列表示例</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 创建一个静态列表数据
const items = ref([
    '苹果',
    '香蕉',
    '橙子',
    '葡萄',
    '西瓜'
]);

</script>