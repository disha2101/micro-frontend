const packageJson = require("../package.json");
module.exports = {
      name: 'container_udemy',
      remotes: {
        cart:  `cart@${process.env.CART_URL}`,
        items:  `items@${process.env.ITEMS_URL}`,
      },
      shared: packageJson.dependencies,

    }
