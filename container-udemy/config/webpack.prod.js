const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const mfConfig = require('./module-federation.config.ts');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

prodConfig = {
    mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(mfConfig),
    
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};

module.exports = merge(commonConfig, prodConfig);
