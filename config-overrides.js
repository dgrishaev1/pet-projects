const path = require('path');

module.exports = {
  webpack: (config) => {
    if (process.env.OLD_BROWSER) {
      config.entry = ['babel-polyfill', 'isomorphic-fetch', './src/index.tsx'];
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        '@controller': path.resolve(__dirname, 'src/controller'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@actions': path.resolve(__dirname, 'src/actions'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
      },
    };

    return config;
  },
};
