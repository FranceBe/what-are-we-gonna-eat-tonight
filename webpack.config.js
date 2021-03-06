const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    index: [
      './src/main.js',
    ]
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
      },
      {
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'file-loader?name=assets/img/[name].[ext]',
        test: /\.(png|jpg|gif|ico)$/,
      },
      {
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
        test: /\.ttf$/,
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      assets: path.join(__dirname, 'assets'),
    }
  },
}

