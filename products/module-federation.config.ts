export const mfConfig = {
  name: "products",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsIndex": "./src/bootstrap",
  },
  shared:["react","react-dom","react-icons"],
};
