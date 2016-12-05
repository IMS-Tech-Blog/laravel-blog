/**
 * webpack.config.dev.js
 */
import {
  VERSION_PATH,
  BUILT_PATH
}                   from './path.config.js';
import {
  hotModule
}                   from './plugins.config.js';
import commonConfig from './webpack.config.common.js';
import webpack from 'webpack';


const devConfig = Object.assign({}, {...commonConfig});

const devServer = {
  contentBase : VERSION_PATH,
  compress    : true,
  port        : 9000,
  inline      : true,
  hot         : true,
  stats       : {
    color: true
  }
  // watchOptions: {
  //   poll: 300,
  //   aggregateTimeout: 300
  // }
};

devConfig.plugins.push(hotModule());
devConfig.plugins.push(new webpack.NamedModulesPlugin());
devConfig.watch = true;
devConfig.devtool = 'source-map';

devConfig.devServer = devServer;

export default devConfig;
