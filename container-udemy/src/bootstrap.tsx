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

// Load remotes dynamically
import("products/ProductsIndex")
  .then(({ mount }) => {
    const el = document.getElementById("products");
    if (el) mount(el);
  })
  .catch(console.error);

import("items/ItemsIndex")
  .then(({ mount }) => {
    const el = document.getElementById("items");
    if (el) mount(el);
  })
  .catch(console.error);


// Expose mount so host can call it when remote is loaded
export { mount };
