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
        test: /\.(png|ttf|jpg|gif|ico)$/,
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      styles: path.join(__dirname, 'styles'),
      assets: path.join(__dirname, 'assets'),
    }
  },
}

