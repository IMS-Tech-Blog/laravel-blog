/**
 * webpack plugins list
 */
import webpack from 'webpack';
import AppCachePlugin from 'appcache-webpack-plugin';

function instance(plugin) {
  return function() {
    return new plugin(...arguments);
  }
}

const optimize = webpack.optimize;
// define
export const define = instance(webpack.DefinePlugin);
// ignore some files
export const ignore = instance(webpack.IgnorePlugin);
// prefetch resources
export const prefetch = instance(webpack.PrefetchPlugin);
// resolver
export const resolver = instance(webpack.ResolverPlugin);
// banner
export const banner = instance(webpack.BannerPlugin);
// optimize delete the same things
export const dedupe = instance(optimize.DedupePlugin);
// limitchunkcount
export const limitChunk = instance(optimize.LimitChunkCountPlugin);
// minchunksize
export const minChunk = instance(optimize.MinChunkSizePlugin);
// occurrence
export const occurrence = instance(optimize.OccurrenceOrderPlugin);
// uglify
export const uglify = instance(optimize.UglifyJsPlugin);
// commonchunk
export const commonChunk = instance(optimize.CommonsChunkPlugin);
// dll
export const dll = instance(webpack.DllPlugin);
// dllRef
export const dllReference = instance(webpack.DllReferencePlugin);
// appCache
export const appCache = instance(AppCachePlugin);
// imageMin
// export const image
