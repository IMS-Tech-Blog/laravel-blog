import dllConfig    from './conf/dll.config.js';
import commonConfig from './conf/webpack.config.common.js';

let config;
const dll = JSON.parse(process.env.DLL);

if(dll) {
  config = dllConfig;
} else {
  config = commonConfig;
}

export default config;
