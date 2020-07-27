import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Router
import { BrowserRouter as Router } from "react-router-dom";
import RestoreScroll from "./RestoreScroll";

// Context
import { ProductProvider } from "./Context";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <RestoreScroll>
        <App />
      </RestoreScroll>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
