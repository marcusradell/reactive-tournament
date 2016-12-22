const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    main: './client/main.js',
    vendor: ['most', 'snabbdom', 'ramda']
  },
  output: {
    path: resolve(__dirname, 'build'),
    pathinfo: !isProduction,
    filename: '[chunkhash].[name].js'
  },
  context: __dirname,
  devtool: isProduction ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
}

module.exports = function onWebpack () {
  return config
}
