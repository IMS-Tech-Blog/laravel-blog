/**
 * common config that shared by dev && prod
 */
import fs      from 'fs';
import path    from 'path';
import {
  ROOT_PATH,
  SRC_PATH,
  BUILT_PATH,
  MANIFEST_PATH
}              from './path.config.js';
import {
  dedupe,
  dllReference,
  define,
  provide,
  watchIgnore,
  cleanWebpack,
  htmlWebpack
}              from './plugins.config.js';
import {
  preLoaders,
  loaders
}              from './loaders.config.js';
import 'babel-polyfill';

const entries = Object.create({});
export function getEntries({exclude = null}) {
  if(!fs.existsSync(SRC_PATH) && !fs.lstatSync(SRC_PATH).isDirectory()) return;
  let children = fs.readdirSync(SRC_PATH);

  if(exclude) {
    const reg = new RegExp(exclude, 'ig');
    children = children.map(item => !reg.test(item));
  }
  children = children.forEach(item => {
      entries[item] = [
        'babel-polyfill',
        path.join(SRC_PATH, item, 'index.js')
      ];
  });

  return entries;
}
getEntries();

export default {
  entry: entries,

  output: {
    filename  : '[name].bundle.js',
    path      : BUILT_PATH,
    publicPath: '/build/'
  },

  resolve: {
    root: [
      path.join(ROOT_PATH, 'node_modules')
    ],
    alias: null,
    modulesDirectories: [
      'node_modules'
    ],
    externals: {

    }
  },

  plugins: [
    dedupe,
    dllReference,
    define,
    provide,
    watchIgnore,
    cleanWebpack,
    htmlWebpack
  ]

  module: {
    preLoaders,
    loaders
  },

  eslint: {
    configFile: path.join(ROOT_PATH, '.eslintrc')
  }
}
