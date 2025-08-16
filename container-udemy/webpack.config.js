const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    mode: 'development',
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
    new ModuleFederationPlugin({
      name: 'container-udemy',
      filename: 'remoteEntry.js',
      exposes: {
        './ContainerIndex': './src/index',
      },
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
        items: 'items@http://localhost:3002/remoteEntry.js',
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } }

    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
