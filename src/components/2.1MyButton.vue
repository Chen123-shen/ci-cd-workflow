<template>
    <button 
    class="my-button"
    :style="buttonStyle" 
    @click="handleClick">
        {{ text }} <!-- 渲染父组件传入的按钮文字 -->
    </button>
</template>

<script setup>
// 1.引入计算属性（根据props动态计算样式，必须导入）
import { computed } from 'vue';

// 2. 用defineProps定义接收的参数，给父组件传参做约束
const props = defineProps({
    // 按钮文字
    text: {
        type: String,
        default: '按钮'
    },
    // 按钮颜色
    color: {
        type: String,
        default: '#409EFF'
    },
    // 按钮大小
    size: {
        type: String,
        default: 'medium' // small, medium, large
    }
});

// 3. 用defineEmits定义向外触发的事件，名称为click（可自定义，如btn-click）
const emit = defineEmits(['click']);

// 4. 计算属性：根据props的color/size，动态生成按钮样式
// 优点：props变化时，样式会自动更新，无需手动操作
const buttonStyle = computed(() => {
    return {
        backgroundColor: props.color,
        // 内边距：根据size调整，控制按钮大小
        padding: props.size === 'small' ? '5px 10px' :
                 props.size === 'large' ? '15px 30px' : '10px 20px',
        // 字体大小：根据size调整
        fontSize: props.size === 'small' ? '12px' :
                  props.size === 'large' ? '18px' : '14px',
        border: 'none', // 去掉默认边框
        borderRadius: '4px', // 圆角，提升美观
        color: '#fff', // 文字白色，适配各种背景色
        cursor: 'pointer' // 鼠标悬浮变手型，提示可点击
    };
});

// 处理按钮点击事件
const handleClick = () => {
    // 向外触发click事件，通知父组件“按钮被点击了”
    // 若需要传参，可写emit('click', 自定义参数)，初学者先掌握基础用法
    emit('click'); // 向父组件发送点击事件
};
</script>

<style scoped>
.my-button {
    transition: background-color 0.3s;
    border: none;
    border-radius: 4px;
    color: white; 
    cursor: pointer;
    transition: opacity 0.3s;
}
.my-button:hover {
    opacity: 0.8;
}
</style>

