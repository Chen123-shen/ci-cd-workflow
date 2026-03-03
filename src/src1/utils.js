/**
 * 格式化日期函数
 * @param {Date|string|number} date - 要格式化的日期
 * @param {string} format - 格式模板，如 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  const targetDate = new Date(date);
  // 处理无效日期
  if (isNaN(targetDate.getTime())) {
    throw new Error('无效的日期格式');
  }

  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const hours = String(targetDate.getHours()).padStart(2, '0');
  const minutes = String(targetDate.getMinutes()).padStart(2, '0');
  const seconds = String(targetDate.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * 防抖函数
 * @param {Function} fn - 要防抖的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @param {boolean} immediate - 是否立即执行
 * @returns {Function} 防抖后的函数
 */
export function debounce(fn, delay = 300, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;

    // 清除之前的定时器
    if (timer) clearTimeout(timer);

    // 立即执行逻辑
    if (immediate && !timer) {
      fn.apply(context, args);
    }

    // 设置新的定时器
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(context, args);
      }
      timer = null;
    }, delay);
  };
}