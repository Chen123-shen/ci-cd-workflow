<template>
    <div class="todo-container">
        <h2>待办事项列表</h2>
        <input v-model="newtodo" 
        placeholder="添加新的待办事项" 
        @keyup.enter="addTodo" />
        <button @click="addTodo">添加</button>
        <ul>
        <li v-for="(todo, index) in todos" :key="index">
            {{ todo.text }}
        </li>
        </ul>
    </div>
</template>

<script setup>  
import { ref } from 'vue';    
// 响应式数据
const newtodo = ref('');
const todos = ref([]);

// 添加待办事项
function addTodo() {
    if (newtodo.value.trim() !== '') {
        todos.value.push({ text: newtodo.value, done: false });
        newtodo.value = '';
    }
}

</script>

<style scoped>  
.todo-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>