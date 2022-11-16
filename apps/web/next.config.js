const withPlugins = require('next-compose-plugins');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withTM = require('next-transpile-modules')(['ui', 'react-hooks', 'common-helpers']);

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    const { dev, isServer } = options;

    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
});
