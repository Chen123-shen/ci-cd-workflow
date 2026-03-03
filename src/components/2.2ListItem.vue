<template>
    <div class = "todo-list">
        <span>{{ todo.text }}</span>
        <button @click = "handleDelete">删除</button>
    </div>
</template>

<script setup>
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete-todo'])

const handleDelete = () => {
    emit('delete-todo', props.todo.id)
}
</script>