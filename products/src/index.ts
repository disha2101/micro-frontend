// src/index.ts
import { mount } from "./bootstrap";

const devRoot = document.getElementById("products");
if (devRoot) {
  mount(devRoot);
}
