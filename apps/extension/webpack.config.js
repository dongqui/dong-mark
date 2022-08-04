const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    popup: './src/popup/index.tsx',
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/manifest.json'),
          to: path.resolve('dist'),
        },
      ],
    }),
    new HtmlPlugin({
      title: 'Dong markyar',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
  },
  output: {
    filename: '[name].js',
  },
};
