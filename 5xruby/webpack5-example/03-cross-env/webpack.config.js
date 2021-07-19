const webpack = require('webpack');
const path = require('path');

// TODO process.env.NODE_ENV 由 package.json npm script 裡定義
const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  // TODO mode 一定要加，只能是 development 或是 production 兩種
  mode: process.env.NODE_ENV,
  // TODO context 指定所有的檔案都從 src 資料始開始
  context: path.resolve('src'),
  entry: {
    'app': './app.js', // 因為有加 context, 所以就不需要寫 src
  },
  // TODO production 發佈就拿掉 source-map
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    // 打包後的 js 檔名
    filename: 'bundle.js',
    // 將打包好的檔發佈至 dist 資料夾
    path: path.resolve('dist'),
  }
};