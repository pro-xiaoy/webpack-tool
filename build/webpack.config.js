const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports  = {
  mode: 'development',
  entry:{
    'index':path.resolve(__dirname,'../index.js'),
  },
  output:{
    filename:'[name].[contenthash].js',
    path:path.resolve(__dirname,'../dist')
  },
  module: {
    rules:[{
      test:/\.js$/,
      use:path.resolve(__dirname,'drop-console.js')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      chunks: ['index']
    }),
    new CleanWebpackPlugin()
  ]
}

