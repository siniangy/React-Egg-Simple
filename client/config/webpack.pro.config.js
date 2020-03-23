const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.pro.js')
  ],
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});