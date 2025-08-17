export const mfConfig = {
  name: "products",
  filename: "productsRemoteEntry.js",
  exposes: {
    "./ProductsIndex": "./src/bootstrap",
  },
  shared:["react","react-dom","react-icons"],
};
