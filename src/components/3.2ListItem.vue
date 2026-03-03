<template>
    <div class="list-item">
        <input 
            type="checkbox" 
            :id="'checkbox-' + item.id" 
            :checked="item.isChecked" 
            @change="handleCheckChange"
        >
        <label :for="'checkbox-' + item.id">{{ item.name }}</label>
    </div>
</template>

<script setup>
// 1.定义props：接收父组件传递的列表数据
const props = defineProps({
    item:{
        type: Object,
        required: true,
        default: () => ({id: 0, name: '', isChecked: false})
    }
})

// 2.定义emits：向父组件发送事件 
const emit = defineEmits(['update:isChecked']);

// 3.处理复选框状态变化的函数
const handleCheckChange = (event) => {
    // 触发事件，传递新的选中状态
    emit('update:isChecked', {
        id: props.item.id, 
        isChecked: event.target.checked
    });
}
</script>

<style scoped>
.list-item {
  padding: 8px 12px;
  border: 1px solid #f3f4f6;
  border-radius: 4px;
  cursor: pointer;
}
.list-item:hover {
  background-color: #f9fafb;
}
</style>