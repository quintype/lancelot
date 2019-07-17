const webpackConfig = require("@quintype/build/config/webpack");

module.exports = async ({ config }) => {
  config.module.rules = webpackConfig.module.rules;
  config.plugins = [...config.plugins, ...webpackConfig.plugins];
  const position = config.plugins.findIndex( m => m.opts && m.opts.fileName === "../../../asset-manifest.json");
  config.plugins.splice(position, 1);
  // Return the altered config
  return config;
};