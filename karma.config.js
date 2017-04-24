const webpack = require("./webpack.config");

module.exports = function(config) {
  ..
  preprocessors: {
    "test/**/*.spec.js": ["webpack"],
  },
  webpack: webpack,
  ..
};
