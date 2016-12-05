/**
 * webpack loaders
 */
import path from 'path';
import {
  ROOT_PATH
} from './path.config.js';
 // babel-loader
export const babel = { test: /\.js$/, /*loader: 'babel', */use: ['react-hot', 'babel'], exclude: /node_modules/ };
// eslint-loader
export const eslint = { test: /\.js$/, loader: 'eslint', /*exclude: /node_modules/, */enforce: 'pre', /*options: { configFile: path.join(ROOT_PATH, '.eslintrc') }*/ };
// css-loader
export const css = { test: /\.css$/, loaders: ['style', 'css'] };
// url-loader
export const url = { test: /\.(jpg|png|gif)$/, loader: 'url?limit=8192' };
// file-loader
export const file = { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' };
// sass-loader
export const sass = { test: /\.scss$/, loaders: ['style', 'css', 'sass', 'postcss'] };
// sass-lint-loader
export const sasslint = { test: /\.scss$/, loader: 'scsslint', enforce: 'pre' };
// html-minify-loader
export const htmlmin = { test: /\.html$/, loader: 'html-minify' };

export const allLoaders = [
  babel,
  eslint,
  css,
  url,
  file,
  sass,
  sasslint,
  htmlmin
];

export default {
  preLoaders: [
    eslint,
    sasslint
  ],
  loaders: [
    babel,
    css,
    url,
    file,
    sass,
    htmlmin
  ]
}
