import { ref, onMounted, onUnmounted } from 'vue'

// 封装鼠标坐标监听的组合式函数
export function useMousePosition() {
  // 1. 用ref封装私有状态（每个组件使用时都会创建独立的x、y）
  const x = ref(0)
  const y = ref(0)

  // 2. 定义鼠标移动的处理函数
  const handleMouseMove = (e) => {
    x.value = e.pageX // 页面X坐标
    y.value = e.pageY // 页面Y坐标
  }

  // 3. 组件挂载时添加事件监听
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  // 4. 组件卸载时移除事件监听（避免内存泄漏）
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  // 5. 返回响应式的坐标数据
  return { x, y }
}