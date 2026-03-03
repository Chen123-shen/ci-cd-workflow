<template>
  <div class="countdown-timer">
    <!-- 展示倒计时数字,0时不显示数字 -->
    <div class="timer-number" v-if="count > 0">{{ count }}</div>
    <!-- 显示倒计时状态 -->
    <div class="timer-status">
      {{ count > 0 ? '倒计时中...' : '倒计时结束！' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 1. 定义响应式数据：倒计时初始值 60 秒
const count = ref(5);
// 定义定时器变量，用于后续清除
let timer: NodeJS.Timeout | null = null;

// 2. 组件挂载时启动定时器
onMounted(() => {
  // setInterval 每隔 1 秒执行一次回调
  timer = setInterval(() => {
    // 倒计时逻辑：count 大于 0 时减 1，否则清除定时器
    if (count.value > 0) {
      count.value--;
    } else {
      // 倒计时结束后清除定时器
      clearInterval(timer);
      timer = null;
    }
  }, 1000); // 1000 毫秒 = 1 秒
});

// 3. 组件卸载时清除定时器（防止内存泄漏）
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});
</script>

<style scoped>
.countdown-timer {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.timer-number {
  font-size: 48px;
  font-weight: bold;
  color: #e63946;
  margin-bottom: 10px;
}

.timer-status {
  font-size: 18px;
  color: #666;
}
</style>