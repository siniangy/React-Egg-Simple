const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.config');
const webpack = require('webpack');
const path = require('path');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist/'),
  inline: true, // dev-server自动刷新
  hot: true, // 热模块替换
  historyApiFallback: true, // 单页应用时会用到
  port: 3001,
  publicPath: '/'
});
server.listen(3001, 'localhost', function (err) {
  if (err) throw err
})