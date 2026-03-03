<template>
    <div class = "child-list">
        <!-- 添加项输入框 -->
        <div class = "add-section">
            <input 
                v-model="newItemName" 
                placeholder="请输入新项名称" 
                @keyup.enter="handleAddItem" 
            />
            <button @click="handleAddItem">添加</button>
        </div>
        <!-- 列表展示 -->
        <ul class = "list-container">
            <li v-for="item in list" :key="item.id" class = "list-item">
                <!-- 编辑状态 -->
                <input 
                    v-if="editingId === item.id" 
                    v-model="editName" 
                    @keyup.enter="handleEditConfirm(item.id)"
                    @blur = "handleEditConfirm(item.id)"
                />
                <!-- 展示状态，显示文本 -->
                 <!-- 下面这个v-else是和上面的那个v-if配套使用的，表示当不处于编辑状态时显示文本内容，并且点击文本内容可以进入编辑状态 -->
                <span v-else @click = "handleEditStart(item)">{{ item.name }}</span>

                <!-- 操作按钮 -->
                <div class = "btn-group">
                    <button v-if = "editingId !== item.id" @click="handleEditStart(item)">编辑</button>
                    <button @click="handleDeleteItem(item.id)">删除</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 1. 定义props，接收父组件传递的列表数据
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  }
})

// 2. 定义emits，用于向父组件传递事件
const emit = defineEmits(['add-item', 'delete-item', 'edit-item'])

// 子组件内部响应式数据
const newItemName = ref('') // 添加项的输入值
const editingId = ref(null) // 当前正在编辑的项ID
const editName = ref('') // 编辑项的输入值

// 3. 添加新项的方法
const handleAddItem = () => {
  if (!newItemName.value.trim()) {
    alert('请输入有效名称！')
    return
  }
  // 触发父组件的add-item事件，传递名称
  emit('add-item', newItemName.value.trim())
  newItemName.value = '' // 清空输入框
}

// 4. 删除项的方法
const handleDeleteItem = (id) => {
    if (confirm('确定要删除此项吗？')) {
        emit('delete-item', id)
    }
}

// 5. 编辑项的方法
// 开始编辑
// (作用一，这个函数的作用是若没有任何修改，那么就不触发父组件的edit-item事件，避免不必要的更新)
// (作用二，点击文本内容时触发，更新editingId的值，然后进入编辑状态)
const handleEditStart = (item) => {
  editingId.value = item.id
  editName.value = item.name // 回显原有名称
}

// 确认编辑
const handleEditConfirm = (id) => {
  if (!editName.value.trim()) {
    alert('请输入有效名称！')
    editingId.value = null
    return
  }
  emit('edit-item', id, editName.value.trim())
  editingId.value = null // 退出编辑状态
}
</script>

<style scoped>
.child-list {
  margin-top: 20px;
}
.add-section {
  margin-bottom: 15px;
}
.add-section input {
  padding: 8px;
  width: 300px;
  margin-right: 10px;
}
.add-section button, .btn-group button {
  padding: 8px 15px;
  cursor: pointer;
}
.list-container {
  list-style: none;
  padding: 0;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 8px;
}
.list-item input {
  padding: 5px;
  width: 250px;
}
.btn-group button {
  margin-left: 5px;
}
</style>