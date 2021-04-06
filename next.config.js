const withReactSvg = require('next-react-svg');
// const withImages = require('next-images');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'vectors'),
  webpack(config, options) {
    return config;
  },
});

// module.exports = withImages({
//   include: path.resolve(__dirname, 'assets/images'),
//   webpack(config, options) {
//     return config;
//   },
// });

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/public/`,
            outputPath: `${isServer ? '../' : ''}public/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};