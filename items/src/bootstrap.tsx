import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<App />);
  return () => root.unmount(); // allows cleanup if needed
};

const devRoot = document.getElementById("items");
if (devRoot) {
  mount(devRoot);
}

export { mount };
