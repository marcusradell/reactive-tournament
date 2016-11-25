const {resolve} = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production' 

const config = {
    entry: './client/main.js',
    output: {
      path: resolve(__dirname, 'build'),
      pathinfo: !isProduction,
      filename: 'bundle.[chunkhash].js'
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

module.exports = function onWebpack() {
  return config
}
