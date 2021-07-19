const path = require('path');
const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: './index.js',
  // https://webpack.js.org/configuration/devtool/#devtool
  // 更換 sourcemap 的方式。
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: { //https://webpack.js.org/configuration/module/
    // TODO: 1 start
    rules: [
        {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        // 只找這個資料夾下的檔案，可以加速 webpack 打包
        include: [path.resolve('src')],
        // 排除文件，加速 webpack 打包
        exclude: /node_modules/,
      },
    ]
    // TODO: 1 end
  },
};