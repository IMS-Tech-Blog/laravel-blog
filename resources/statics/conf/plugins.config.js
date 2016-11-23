/**
 * webpack plugins list
 */
import webpack from 'webpack';
// import AppCachePlugin from 'appcache-webpack-plugin';
import {
  MANIFEST_PATH
} from './path.config.js';

function instance(plugin) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return new plugin(...arguments || ...args);
  }
}

const optimize = webpack.optimize;
// ignore some files
export const ignore = instance(webpack.IgnorePlugin);
// prefetch resources
export const prefetch = instance(webpack.PrefetchPlugin);
// resolver
export const resolver = instance(webpack.ResolverPlugin);
// banner
export const banner = instance(webpack.BannerPlugin, '---default comment---');
// optimize delete the same things
export const dedupe = instance(optimize.DedupePlugin);
// limitchunkcount
export const limitChunk = instance(optimize.LimitChunkCountPlugin, {
  maxChunk: 3
});
// minchunksize
export const minChunk = instance(optimize.MinChunkSizePlugin);
// occurrence
export const occurrence = instance(optimize.OccurrenceOrderPlugin);
// uglify
export const uglify = instance(optimize.UglifyJsPlugin);
// commonchunk
export const commonChunk = instance(optimize.CommonsChunkPlugin, {
  name    : 'vendor',
  filename: 'vendor.js'
});
// dll
export const dll = instance(webpack.DllPlugin, {
  path   : 'manifest.json',
  name   : '[name]',
  context: __dirname
});
// dllRef
export const dllReference = instance(webpack.DllReferencePlugin, {
  context : __dirname,
  manifest: require(MANIFEST_PATH)
});
// appCache
// export const appCache = instance(AppCachePlugin);
// imageMin
// export const imageMin = instance(ImageminPlugin);
/** dependence */
// define
export const define = instance(webpack.DefinePlugin, {
  __DEV__    : JSON.stringify(JSON.parse(process.env.BUILD_ENV || 'true')),
  __RELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_RELEASE || 'false'))
});
// provide
export const provide = instance(webpack.ProvidePlugin);
// hotModule
export const hotModule = instance(webpack.HotModuleReplacementPlugin);
// extendedApi
export const extendedApi = instance(webpack.ExtendedApiPlugin);
// noErrors
export const noErrors = instance(webpack.NoErrorsPlugin);
// watchIgnore
export const watchIgnore = instance(webpack.WatchIgnorePlugin);

// default
export default {
  ignore,
  prefetch,
  resolver,
  banner,
  dedupe,
  limitChunk,
  minChunk,
  occurrence,
  uglify,
  commonChunk,
  dll,
  dllReference,
  define,
  provide,
  hotModule,
  extendedApi,
  noErrors,
  watchIgnore
}
