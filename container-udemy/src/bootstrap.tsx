import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<App />);
};

const devRoot = document.getElementById("app");
if (devRoot) {
  mount(devRoot);
}

import("products/ProductsIndex")
  .then(({mount}) => {
    if(mount) {
      const el = document.getElementById("items");
      if (el) mount(el);
    } else {
      console.error("products/ProductsIndex did not export mount");
    }
  })
  .catch(((err) => {
    console.error("Error loading ProductsIndex", err)
  }));

  

import("items/ItemsIndex")
  .then(({mount}) => {
    if(mount) {
      const el = document.getElementById("items");
      if (el) mount(el);
    } else {
      console.error("items/ItemsIndex did not export mount");
    }
  })
  .catch(((err) => {
    console.error("Error loading ItemsIndex", err)
  }));


// Expose mount so host can call it when remote is loaded
export { mount };
