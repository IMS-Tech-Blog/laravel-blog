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


const devConfig = Object.assign({}, {...commonConfig});

const devServer = {
  contentBase : VERSION_PATH,
  compress    : true,
  port        : 9000,
  // inline      : true,
  hot         : true,
  // watchOptions: {
  //   poll: 300,
  //   aggregateTimeout: 300
  // }
};

devConfig.plugins.push(hotModule());

devConfig.devServer = devServer;

export default devConfig;
