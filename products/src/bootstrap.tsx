import React from "react";
import {createRoot,Root} from "react-dom/client";
import App from "./App";
import "./index.css";

const mount = (el: Element) => {
  let root: Root | null = null;
  if (!root) {
    root = createRoot(el);
  }
  root.render(<App />);
};

const devRoot = document.getElementById("cart");
if (devRoot) {
  mount(devRoot);
}

export { mount };
