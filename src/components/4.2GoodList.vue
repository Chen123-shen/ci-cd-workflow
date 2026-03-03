<!-- GoodsList.vue 子组件 -->
<template>
  <ul class="goods-list">
    <!-- 遍历父组件传递的goods数据 -->
    <li v-for="item in goods" :key="item.id" class="goods-item">
      {{ item.name }} - ￥{{ item.price }}
    </li>
  </ul>
</template>

<script setup>
// 定义接收父组件的props（类型校验，新手也能明确数据格式）
const props = defineProps({
  goods: {
    type: Array, // 类型是数组
    required: true, // 必须传递
    // 数组元素的格式校验（新手可了解，增强代码健壮性）
    default: () => [],
    validator: (value) => {
      return value.every(item => item.hasOwnProperty('id') && item.hasOwnProperty('name') && item.hasOwnProperty('price'));
    }
  }
});
</script>

<style scoped>
.goods-list {
  list-style: none;
  padding: 0;
  border: 1px solid #eee;
}
.goods-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.goods-item:last-child {
  border-bottom: none;
}
</style>