<template>
    <div class="counter">
        <h2>Counter: {{ count }}</h2>
        <!-- 点击“增加”这个按钮就触发一次increment函数 -->
        <button @click="increment">增加</button>      
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
function increment() {
    count.value++;
}
</script>

<style scoped>
.counter {
    text-align: center;
    margin-top: 20px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
h2 {
    font-size: 24px;
    margin-bottom: 10px;
}
</style>