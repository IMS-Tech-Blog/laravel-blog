/**
 * common config that shared by dev && prod
 */
import fs         from 'fs';
import path       from 'path';
import {
  ROOT_PATH,
  SRC_PATH,
  BUILT_PATH,
  VERSION_PATH,
  MANIFEST_PATH,
  VERSION
}                 from './path.config.js';
import {
  dedupe,
  dllReference,
  define,
  provide,
  watchIgnore,
  cleanWebpack,
  htmlWebpack
}                 from './plugins.config.js';
import {
  allLoaders
}                 from './loaders.config.js';
import 'babel-polyfill';

const entries = Object.create({});
export function getEntries(exclude = null) {
  if(!fs.existsSync(SRC_PATH) && !fs.lstatSync(SRC_PATH).isDirectory()) return;
  let children = fs.readdirSync(SRC_PATH);

  if(exclude) {
    const reg = new RegExp(exclude, 'ig');
    children = children.map(item => !reg.test(item));
  }
  children = children.forEach(item => {
      entries[item] = [
        'babel-polyfill',
        /* if use react-hot-loader@next, you should put react-hot-loader/babel in .babelrc's plugins option */
        // 'react-hot-loader/patch',
        // activate HMR for React

        // 'webpack-dev-server/client?http://localhost:9000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        // 'webpack/hot/only-dev-server',
        // 'webpack/hot/dev-server',
        // 'webpack-hot-middleware/client',
        path.join(SRC_PATH, item, 'index.js')
      ];
  });

  return entries;
}
getEntries();

export default {
  entry: entries,

  output: {
    filename  : '[name].[hash:8].js',
    path      : VERSION_PATH,
    // publicPath: `build/${VERSION}`
  },

  resolve: {
    alias: {},
    modules: [
      path.join(ROOT_PATH, 'node_modules')
    ],
    enforceModuleExtension: false,
    enforceExtension      : false,
    extensions            : ['.js', '.json', '.jsx', '.css', '.scss']
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  plugins: [
    // dedupe(),
    provide({
      'React'   : 'react',
      'ReactDOM': 'react-dom'
    }),
    // cleanWebpack(),
    dllReference(),
    define(),
    // watchIgnore(),
    htmlWebpack({
      title   : 'Ims-Blog',
      template: path.join(ROOT_PATH, 'index.ejs'),
      hash    : false
    })
  ],

  module: {
    rules: allLoaders
  },

  externals: {}
}
