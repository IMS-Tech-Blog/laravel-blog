/**
 * webpack loaders
 */
 // babel-loader
export const babel = { test: /\.js$/, loader: 'babel', exclude: /node_modules/ };
// eslint-loader
export const eslint = { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ };
// css-loader
export const css = { test: /\.css$/, loaders: ['style', 'css'] };
// url-loader
export const url = { test: /\.(jpg|png|gif)$/, loader: 'url?limit=8192' };
// file-loader
export const file = { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' };
// sass-loader
export const sass = { test: /\.scss$/, loaders: ['style', 'css', 'sass', 'postcss'] };
// sass-lint-loader
export const sasslint = { test: /\.scss$/, loader: 'scsslint' };
// html-minify-loader
export const htmlmin = { test: /\.html$/, loader: 'html-minify' };

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
