/**
 * webpack loaders
 */
 // babel-loader
export const babel = { test: /\.js$/, loader: 'babel' };
// eslint-loader
export const eslint = { test: /\.js$/, loader: 'eslint' };

export const css = { test: /\.css$/, loader: ['style', 'css'] };

// export const url = { test:  }
