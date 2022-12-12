const path = require('path');
const autoprefixer = require('autoprefixer');

const toPath = _path => path.join(process.cwd(), _path);
console.log(toPath('../../node_modules/@emotion/react'))
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,      
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [autoprefixer],
            },
          },
        },
        'sass-loader',
      ],        
    });
    
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
      },
    });

    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/react': toPath('../../node_modules/@emotion/react'),
    }
    return config;
  },
}