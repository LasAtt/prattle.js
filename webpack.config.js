var webpack = require('webpack')
  , path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR =  path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff(2)?|ttf)$/,
        loader: 'file-loader'
      }
    ]
  }
};

module.exports = config;
