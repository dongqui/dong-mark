const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
          'sass-loader',
        ],
        test: /\.s[ac]ss$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  output: {
    filename: 'hi.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
