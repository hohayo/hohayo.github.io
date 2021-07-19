const path = require('path');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: './index.js',
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  resolve: {
    // TODO
    // 在 import 檔案, 如果不想寫完整的路徑
    // 可以加入這些目錄, 讓 webpack 自動尋找, 主要是讓圖片支援 ~img 路徑寫法
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'), // 這個一定要加
    ],
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      // TODO
      /* 多 loader 組合
      https://webpack.js.org/configuration/module/#rule-use
      */
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options:{
              sourceMap:true
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap:true
            }
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048, // 小於 2048 bytes(2k) 的圖檔, 自動變成 base64 字串
            // 檔名： [資料夾][檔名].[副檔名]
            name: '[path][name].[ext]',
          },
        },
        include: path.resolve('src/img'),
      },
    ]
  }
}