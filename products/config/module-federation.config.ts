const productsPackageJson = require("../package.json");

module.exports = {
  name: "cart",
  filename: "cartsRemoteEntry.js",
  exposes: {
    "./CartsIndex": "./src/bootstrap",
  },
  shared:productsPackageJson.dependencies,
};
