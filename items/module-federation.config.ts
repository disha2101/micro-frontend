export const mfConfig = {
      name: "items",
      filename: "itemsRemoteEntry.js",
      exposes: {
        "./ItemsIndex": "./src/bootstrap",
      },
      shared: ["react", "react-dom","react-icons"],
    };
