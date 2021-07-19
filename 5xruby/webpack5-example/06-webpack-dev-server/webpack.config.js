const path = require('path');
// TODO 1
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: 'app.js',
    publicPath: '/', // TODO
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: path.resolve('src/css'),
      },
      // TODO 3 start
      {
        test: /\.html$/,
        use:[
          { 
            // https://github.com/webpack-contrib/html-loader
            loader: 'html-loader',
          },
        ],
        include: path.resolve('src/html'),
      },
      // TODO 3 end
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[path][name].[ext]'
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ]
  },
  plugins: [
    // TODO 4
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html'
    }),
  ],
  // TODO 5 start
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
    // https://webpack.js.org/configuration/dev-server/#devserverstats-
    stats: 'minimal'
  },
  // TODO 5 end
};