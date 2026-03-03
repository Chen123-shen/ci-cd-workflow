<template>
    <div class="icon-input">
        <span class="icon">{{ getIcon() }}</span>
        <!-- 输入框：绑定value，监听input事件（核心v-model逻辑） -->
         <input
            type = "text"
            class = "input"
            :value = "modelValue"
            @input = "handleInput"
            :placeholder="placeholder"
        />
    </div>
</template>

<script setup>
// 1. 定义接收的props：满足父组件的传参需求
const props = defineProps({
    // v-model核心props：接收父组件绑定的值
    modelValue:{
        type: String,
        default: '',// 如果这个组件被父组件使用时没有传入modelValue，则默认为空字符串，避免输入框显示undefined
        required: true
    },
    // 图标类型：支持父组件传search/email等
    icon: {
        type: String,
        default: 'search'
    },
    // 输入框提示文字
    placeholder: {
        type: String,
        default: '请输入内容'
    }
})

// 2. 定义事件：用于向父组件传递输入值变化
const emit = defineEmits(['update:modelValue'])

// 3. 处理输入事件：更新modelValue并触发update:modelValue事件
function handleInput(event) {
    emit('update:modelValue', event.target.value)
}

// 4. 后续补全：根据icon类型切换图标（先预留函数骨架）
const getIcon = () => {
  switch (props.icon) {
    case 'search':
      return '🔍'
    case 'user':
      return '✉️'
    default:
      return '🔍'
  }
}
</script>

<style scoped>
/* 子组件样式：保证布局和交互体验 */
.icon-input {
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 12px;
  box-sizing: border-box;
}

.icon {
  font-size: 18px;
  margin-right: 8px;
}

.input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
}

/* 聚焦高亮：提升交互体验 */
.icon-input:focus-within {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}
</style>