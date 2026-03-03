import { ref, watch } from 'vue'

/**
 * 封装本地存储的组合式函数
 * @param {string} key - 本地存储的键名
 * @param {any} defaultValue - 默认值（无数据时使用）
 * @returns {Ref} 响应式数据，修改时自动同步到 localStorage
 */
export function useLocalStorage(key, defaultValue) {
  // 1. 初始化：从本地存储读取数据，没有则用默认值
  let storedValue
  try {
    // 读取并反序列化（JSON.parse）
    storedValue = JSON.parse(localStorage.getItem(key))
  } catch (error) {
    // 兼容存储格式错误的情况
    console.warn(`读取 localStorage 键 ${key} 失败：`, error)
    storedValue = defaultValue
  }

  // 2. 创建响应式数据（优先用本地存储的值，没有则用默认值）
  const data = ref(storedValue ?? defaultValue)

  // 3. 监听数据变化，自动同步到本地存储
  watch(
    data,
    (newValue) => {
      try {
        // 序列化（JSON.stringify）后存入本地存储
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error(`保存 localStorage 键 ${key} 失败：`, error)
      }
    },
    { 
      deep: true, // 深度监听（支持对象/数组等复杂数据）
      immediate: true // 初始化时立即执行一次（确保默认值也能存入）
    }
  )

  // 4. 返回响应式数据
  return data
}