'use strict'

var path = require('path')
var webpack = require('webpack')

var config = {
  debug: true,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.ios.js',
    pathinfo: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['babel-loader?stage=0,blacklist=validation.react']
      }
    ]
  }
}

// Hot loader
if (process.env.HOT) {
  config.devtool = 'eval' // Speed up incremental builds
  config.entry = [
    'react-native-webpack-server/hot/entry', 
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:8082'
  ].concat(config.entry)
  config.output.publicPath = 'http://localhost:8082/'
  config.module.loaders[0].loaders.unshift('react-hot')
  config.plugins = config.plugins || []
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
