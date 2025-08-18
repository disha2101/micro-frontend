import React from "react";
import {createRoot,Root} from "react-dom/client";
import App from "./App";

import "./index.css";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";

const mount = (el: Element) => {
  let root: Root | null = null;
  if (!root) {
    root = createRoot(el);
  }
  root.render( <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>);
};

const devRoot = document.getElementById("cart");
if (devRoot) {
  mount(devRoot);
}

export { mount };
