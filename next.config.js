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