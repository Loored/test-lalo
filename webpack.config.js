const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const hotModuleScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html', 
  filename: './index.html'
});

module.exports = {
  mode: 'development', /* Let webpack know we are in development */
  entry: {
    bundle: [hotModuleScript, './src/index.js']},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  }, 
  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']  
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: { name: '/static/[name].[ext]' }
      },
      {test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/fonts/helveticaneue'
            }
          }
        ]}
    ]
  },
};