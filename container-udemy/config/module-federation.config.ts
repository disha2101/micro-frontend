const packageJson = require("../package.json");
module.exports = {
      name: 'container_udemy',
      remotes: {
        cart: 'cart@http://localhost:3001/cartsRemoteEntry.js',
        items: 'items@http://localhost:3002/itemsRemoteEntry.js',
      },
      shared: packageJson.dependencies,

    }
