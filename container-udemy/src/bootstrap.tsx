import React from "react";
import { createRoot,Root } from "react-dom/client";
import App from "./App";

const mount = (el: HTMLElement) => {
  let root: Root | null = null;
  if (!root) {
    root = createRoot(el);
  }
  root.render(<App />);
};

const devRoot = document.getElementById("app");
if (devRoot) {
  mount(devRoot);
}

import("cart/CartsIndex")
  .then(({mount}) => {
    if(mount) {
      const el = document.getElementById("items");
      if (el) mount(el);
    } else {
      console.error("cart/CartsIndex did not export mount");
    }
  })
  .catch(((err) => {
    console.error("Error loading CartsIndex", err)
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
