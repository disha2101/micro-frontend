const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // files to process
        exclude: /node_modules/,     // skip external libs
        use: {
          loader: "babel-loader",    // tells Webpack to use Babel
          options: {
            presets: [
              "@babel/preset-env",  // transpile modern JS
              "@babel/preset-react", // handle JSX
              "@babel/preset-typescript" // handle TS
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import"     // for import()
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    })
    ]
};
