const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const mfConfig = require("./module-federation.config.ts");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

devConfig = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto", // important for module federation
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(mfConfig),
  ],
  devServer: {
    port: 3002,
    open: true,
    hot: true,
    historyApiFallback: true, // for SPA routing
  },
};

module.exports = merge(commonConfig, devConfig);


