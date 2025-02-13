const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  // Set the mode to development or production
  entry: './src/index.js', // Your main entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Name of the output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // For JSX and ES6+ support
        },
      },
      {
        test: /\.css$/, // Add this rule for handling .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML file
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
