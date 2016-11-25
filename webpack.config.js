const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin()

const isProd = process.env.NODE_ENV === 'production' 

module.exports = function onWebpack(env) {
  return {
    entry: './client/main.js',
    output: {
      path: resolve(__dirname, 'build'),
      pathinfo: !isProd,
      filename: 'bundle.[chunkhash].js'
    },
    context: __dirname,
    devtool: 'source-map',
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
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/index.html'
      }),
      new UglifyJsPlugin({
        sourceMap: true
      })
      // TODO:
      // DefinePlugin
      // UglifyPlugin (Settings)
      // DedupePlugin
      // LoaderOptionsPlugin
    ]
  }
}