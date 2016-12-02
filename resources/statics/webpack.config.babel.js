import dllConfig from './conf/dll.config.js';
import devConfig from './conf/webpack.config.dev.js';

let config;
const dll = JSON.parse(process.env.DLL);

if(dll) {
  config = dllConfig;
} else {
  config = devConfig;
}

export default config;
