import { formatDate, debounce } from '../dist/index.esm.js';

console.log('ESM 测试 - 格式化日期:', formatDate(new Date(), 'YYYY-MM-DD'));

const debounceTest = debounce(() => {
  console.log('ESM 测试 - 防抖函数执行');
}, 500);
debounceTest();