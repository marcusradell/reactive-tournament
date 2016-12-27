const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    main: './client/main.js',
    vendor: [
      'most-subject',
      'most',
      'ramda',
      'snabbdom'
    ]
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
    // TODO: Try to fix commons chunk filename argument to minify further.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    
  ]
}

module.exports = function onWebpack () {
  return config
}
