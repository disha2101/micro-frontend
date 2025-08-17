import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

const devRoot = document.getElementById("products");
if (devRoot) {
  mount(devRoot);
}

export { mount };
