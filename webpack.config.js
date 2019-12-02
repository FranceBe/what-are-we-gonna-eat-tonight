const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    index: [
      './src/main.js',
    ]
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: "[name].js",
    publicPath: "/",
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': 'false',//commonjs,amd,umd,systemjs,auto
                    'useBuiltIns': 'usage',
                    'targets': '> 0.25%, not dead',
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {}
  },
};

