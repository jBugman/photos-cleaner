const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devPath = 'build/dev'
const dist = path.resolve(__dirname, devPath)

const htmlGeneration = new HtmlWebpackPlugin({
  inject: 'body',
  template: path.resolve(__dirname, 'public/index.html'),
  hash: true,
})

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlGeneration],
}
