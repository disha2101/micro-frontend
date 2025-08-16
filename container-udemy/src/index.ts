import("./App");
// console.log('App', 'App');

import("products/ProductsIndex").then(({ mount }) => {
    console.log(mount, 'mount');
  const el = document.getElementById("products");
  if (el) {
      mount(el)
      console.log(el,'el')
    };
}).catch((error) => {
    console.error("Error loading ProductsIndex:", error)
        });

import("items/ItemsIndex").then(({ mount }) => {
  const el = document.getElementById("items");
  if (el) {
        mount(el)
        console.log(el,'el items')};
}).catch((error) => {
    console.error("Error loading ItemsIndex:", error)
        });
