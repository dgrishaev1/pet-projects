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
      },
    };

    return config;
  },
};
