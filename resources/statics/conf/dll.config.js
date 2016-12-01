/**
 * dll.config.js
 */
import {
  dll
} from './plugins.config.js';
import {
  VERSION_PATH
} from './path.config.js';

const vendors = [
  'react',
  'react-dom',
  'babel-polyfill'
];

export default {
  entry: {
    vendor: vendors
  },

  output: {
    path    : VERSION_PATH,
    filename: '[name].js',
    library : '[name]'
  },

  plugins: [
    dll()
  ],

  resolve: {
    modules: ['node_modules']
  }
};
