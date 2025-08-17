export const mfConfig = {
      name: 'container_udemy',
      remotes: {
        products: 'products@http://localhost:3001/productsRemoteEntry.js',
        items: 'items@http://localhost:3002/itemsRemoteEntry.js',
      },
      shared: ["react", "react-dom","react-icons"],

    }
