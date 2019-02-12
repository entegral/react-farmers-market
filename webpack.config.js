const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'] 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
};
