<template>
  <div class="shortcut-tip">
    <p>请按下 <kbd>Ctrl + S</kbd> 测试全局快捷键</p>
  </div>
</template>

<script setup>
// 导入Vue3的生命周期钩子
import { onMounted, onUnmounted } from 'vue'

// 定义键盘事件处理函数
const handleKeyDown = (e) => {
  // 判断是否同时按下了Ctrl键和S键
  // e.ctrlKey 判断Ctrl键是否按下，e.key 判断按下的是S键（不区分大小写）
  if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
    // 阻止浏览器默认的Ctrl+S保存页面行为
    e.preventDefault()
    // 弹出保存成功提示
    alert('保存成功')
  }
}

// 组件挂载时绑定全局键盘事件
onMounted(() => {
  // 给document绑定keydown事件，监听所有键盘按下操作
  document.addEventListener('keydown', handleKeyDown)
  console.log('全局快捷键已绑定：Ctrl + S')
})

// 组件卸载时解绑事件，防止内存泄漏
onUnmounted(() => {
  // 必须解绑和绑定相同的函数引用
  document.removeEventListener('keydown', handleKeyDown)
  console.log('全局快捷键已解绑')
})
</script>

<style scoped>
.shortcut-tip {
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  color: #666;
}

kbd {
  display: inline-block;
  padding: 2px 6px;
  margin: 0 4px;
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
}
</style>