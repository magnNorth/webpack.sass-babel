const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, "dist")
const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [
      {
        test: /\.(s|)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
	port,
	historyApiFallback: true,
	publicPath: '/dist/',
  }
}


