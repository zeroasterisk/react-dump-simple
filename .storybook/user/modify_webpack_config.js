const path = require('path');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  config.module.loaders = [
    {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: path.resolve(__dirname, '../../'),
    },
    {
      test: /\.json$/,
      loaders: ["json-loader"],
      include: path.resolve(__dirname, '../../'),
    },
  ];
  config.module.resolve = {
    extensions: ['', '.json', '.jsx', '.js']
  };
}
