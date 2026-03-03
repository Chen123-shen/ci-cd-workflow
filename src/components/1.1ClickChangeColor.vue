<template>
    <div class="container">
        <div class="text" :style="{ color: bgColor }">
            点击下面的按钮，文字颜色会随机变化
        </div>
        <button class="button" @click="changeColor">改变颜色</button>
    </div>
    <!-- 这里的工作原理是：点击触发 changeColor 方法，该方法生成一个随机颜色并更新 bgColor 变量。
    由于 bgColor 是响应式的，绑定到文本颜色上时（即:style="{ color: bgColor }"），文本颜色会自动更新为新的随机颜色。
    所以页面的文本（改变的是这个：“点击下面的按钮，文字颜色会随机变化”）颜色会随着每次点击按钮而变化。 -->
</template>

<script setup>  
import { ref } from 'vue';
// 创建一个响适应的颜色变量
const bgColor = ref('#000000');
// 点击颜色随机变化
const changeColor = () => {
    // 生成随机颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // 更新颜色变量
    bgColor.value = randomColor;
};
</script>

<style scoped> 
.container {
    text-align: center;
    margin-top: 20px;
}

.text {
    font-size: 18px;
    margin-bottom: 10px;
}

.button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>