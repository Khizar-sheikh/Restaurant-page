const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    menu: './src/menu.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Ala Carte ',
      template: './dist/index.html', // Update the template path here
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
