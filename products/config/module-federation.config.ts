module.exports = {
  name: "cart",
  filename: "cartsRemoteEntry.js",
  exposes: {
    "./CartsIndex": "./src/bootstrap",
  },
  shared:["react","react-dom","react-icons"],
};
