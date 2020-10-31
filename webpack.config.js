const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3030,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(jpg|jpeg|png|gif)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'image/'
        }
    },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/image', to: 'image' }
      ],
    }),
  ]
};