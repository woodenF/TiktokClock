const path = require('path');
const sourceMap = process.env.NODE_ENV === 'development';

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
}