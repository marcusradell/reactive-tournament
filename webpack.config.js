const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    main: './client/main.js',
    most: 'most',
    ramda: 'ramda',
    snabbdom: 'snabbdom'
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
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.min.js', '.js', '.css'],
    alias: {
      most: 'most/dist/most.min.js',
      ramda: 'ramda/dist/ramda.min.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['most', 'ramda', 'snabbdom', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    })
  ]
}

module.exports = function onWebpack () {
  return config
}
