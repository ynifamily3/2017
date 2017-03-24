var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/* https://www.npmjs.com/package/html-webpack-plugin */
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Happy birthday yayoi-chan! 2017 (af)',
    template: 'src/contents.html', //in
    filename: '../index.html' //out
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ]]
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  }
};