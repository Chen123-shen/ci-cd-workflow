// stores/taskStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 第一个参数是 Store 的唯一标识（必须唯一），第二个参数是配置对象
export const useTaskStore = defineStore('task', () => {
  // 1. 定义状态：用 ref 存储任务列表（和组件内的 ref 用法一致）
  const taskList = ref([
    { id: 1, title: '学习 Pinia', completed: false },
    { id: 2, title: '完成 Vue3 任务', completed: true }
  ])

  // 2. 定义操作状态的方法（相当于 mutations/actions）
  // 添加任务
  const addTask = (title) => {
    if (!title.trim()) return // 空任务不添加
    taskList.value.push({
      id: Date.now(), // 用时间戳做唯一 ID
      title,
      completed: false
    })
  }

  // 切换任务完成状态
  const toggleTask = (taskId) => {
    const task = taskList.value.find(t => t.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }

  // 删除任务
  const deleteTask = (taskId) => {
    taskList.value = taskList.value.filter(t => t.id !== taskId)
  }

  // 3. 返回需要暴露给组件的状态和方法
  return { taskList, addTask, toggleTask, deleteTask }
})