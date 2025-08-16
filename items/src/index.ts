// src/index.ts
import { mount } from "./bootstrap";

const devRoot = document.getElementById("items");
if (devRoot) {
  mount(devRoot);
}
