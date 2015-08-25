'use strict'

var path = require('path')

module.exports = {
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
        loader: 'babel-loader',
        query: {
          stage: 0,
          blacklist: 'validation.react'
        }
      }
    ]
  }
}
