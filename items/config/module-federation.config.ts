const itemsPackageJSON = require("../package.json");
module.exports = {
      name: "items",
      filename: "itemsRemoteEntry.js",
      exposes: {
        "./ItemsIndex": "./src/bootstrap",
      },
      shared: itemsPackageJSON.dependencies,
    };
