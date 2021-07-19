const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

const CONTENT_HASH = DEV_MODE ? '' : '-[contenthash]';

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    // TODO
    filename: `[name]${CONTENT_HASH}.js`,
    path: path.resolve('dist'),
    publicPath: '/',
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
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { 
              sourceMap: true,
              additionalData: `
                $DEV_MODE: ${DEV_MODE};
                @import '~css/mixins/_mixin.scss';
              `,
            },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.pug$/,
        use:[
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: 'webpack 傳過去的參數 milkmidi'
              }
            },
          }
        ],
        include: path.resolve('src/html'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              // TODO
              name: DEV_MODE
                ? '[path][name].[ext]'
                : '[path][name].[ext]?[contenthash:10]',
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // TODO
      filename: `style${CONTENT_HASH}.css`,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
};