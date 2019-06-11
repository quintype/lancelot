const webpackConfig = require("@quintype/build/config/webpack");

module.exports = async ({ config }) => {
  config.module.rules = webpackConfig.module.rules;
  config.plugins = [...config.plugins, ...webpackConfig.plugins];

  // Return the altered config
  return config;
};