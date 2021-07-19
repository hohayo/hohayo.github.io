const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    // 打包後的 js 檔名
    filename: 'bundle.js',
    // 將打包好的檔發佈至 dist 資料夾
    path: path.resolve('dist'),
  }
};
