const pkg = require('./package.json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const cleanup = require('rollup-plugin-cleanup');

// 把 export default 替换为 module.exports
module.exports = {
  // 入口文件
  input: './src/src1/index.js',
  // 输出配置（支持多格式）
  output: [
    // 1. ESM 格式（现代浏览器/ES 模块环境）
    {
      file: pkg.module, // 对应 package.json 中的 module 字段
      format: 'es', // ES 模块格式
      sourcemap: true, // 生成 sourcemap，方便调试
    },
    // 2. CJS 格式（Node.js 环境）
    {
      file: pkg.main, // 对应 package.json 中的 main 字段
      format: 'cjs', // CommonJS 格式
      sourcemap: true,
    },
  ],
  // 插件配置
  plugins: [
    // 解析 node_modules 中的模块
    nodeResolve(),
    // 将 CommonJS 模块转换为 ES 模块
    commonjs(),
    // 清理代码（去除注释、多余空格）
    cleanup({
      comments: 'none', // 移除所有注释
      maxEmptyLines: 0, // 移除空行
    }),
  ],
  // 外部依赖（避免打包到产物中）
  external: Object.keys(pkg.dependencies || {}), // 将 Vue 等依赖作为外部依赖，不打包进库
};