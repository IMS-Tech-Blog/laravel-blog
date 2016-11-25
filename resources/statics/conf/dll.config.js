/**
 * dll.config.js
 */
import {
  dll
} from './plugins.config.js';
import {
  BUILT_PATH
} from './path.config.js';

const vendors = [
  'react',
  'react-dom'
];

export default {
  entry: {
    vendor: vendors
  },

  output: {
    path    : BUILT_PATH,
    filename: '[name].js',
    library : '[name]'
  },

  plugins: [
    dll
  ]
};
