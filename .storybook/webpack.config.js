const webpackConfig = require("@quintype/build/config/webpack");

module.exports = async ({ config }) => {
  config.module.rules = webpackConfig.module.rules;
  let findModuleCssRule = config.module.rules.filter(rule => rule.test.toString() === '/\\.m.css$/');
  if(findModuleCssRule[0] && findModuleCssRule[0].test) {
    findModuleCssRule[0].test = /\.css$/;
  }
  config.plugins = [...config.plugins, ...webpackConfig.plugins];
  const position = config.plugins.findIndex( m => m.opts && m.opts.fileName === "../../../asset-manifest.json");
  config.plugins.splice(position, 1);
  // Return the altered config
  return config;
};

