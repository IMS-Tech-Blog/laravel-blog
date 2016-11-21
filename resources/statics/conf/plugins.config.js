/**
 * webpack plugins list
 */
import webpack from 'webpack';

// optimize
export const dedupe = new webpack.DedupePlugin();
export const define = new webpack.DefinePlugin();
