const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 插件自动引入并配置html
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'development';

/**
 * 开发环境
 */
module.exports = merge(webpackConfig, {
  // devtool: 'cheap-module-eval-source-map', // 很影响打包体积的
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch', // 记录react页面组件状态保存
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.dev.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});