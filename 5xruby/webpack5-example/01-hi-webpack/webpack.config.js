const path = require('path');
// TODO
module.exports = {
  // 由 package script command line 設定
  // mode: 'development',

  entry: './src/index.js',  // 程式進入點
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map', // sourcemap
  output: {
    filename: 'bundle.js',  // 打包後的檔名
    path: path.resolve('dist'), // 打包後的檔案路徑
  }
};
