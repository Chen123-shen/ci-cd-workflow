<template>
    <div class="container">
        <textarea 
            class="textarea" 
            v-model="text" 
            placeholder="请输入文本（限制20个字符）"
        ></textarea>
        <div 
            class="char-count" 
            :class="{ 'over-limit': isOverLimit }"
        >
            字符数: {{ charCount }} / 20
        </div>
    </div>
</template>

<script setup>
import { ref , computed} from 'vue';

// 创建一个响应式的文本变量
const text = ref('');
// 计算文本的字符数
const charCount = computed(() => 
    text.value.length
);
//计算属性：判断字符数是否超过20
const isOverLimit = computed(() => 
    charCount.value > 20
);

// 输入文本时更新文本变量
const updateText = (event) => {
    text.value = event.target.value;
};
</script>

<style scoped>
.container {
    width: 300px;
    margin: 10px auto;
    text-align: center;
}
.textarea {
    width: 100%;
    height: 100px;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
}
.char-count {
    margin-top: 10px;
    font-size: 14px;
    color: #5fb12d;
}
.char-count.over-limit {
    color: red;
}

</style>