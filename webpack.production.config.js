var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.jsx'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/vote_ui/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(eot|ttf|wav|mp3|woff)$/, loader: 'file-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
    ]),
  ]
};
