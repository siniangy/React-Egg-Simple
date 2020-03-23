const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/index.dev.js')
    ],
    vendor: ['react', 'react-dom', 'babel-polyfill']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app/[name]_[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(jpg|png|otf)$/,
        loader: "url?limit=8192"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  // plugins: [ // 已经废弃了
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     minChunks: Infinity
  //   })
  // ]
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
}