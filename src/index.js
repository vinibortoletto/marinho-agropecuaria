import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import RestoreScroll from "./RestoreScroll";

ReactDOM.render(
  <Router>
    <RestoreScroll>
      <App />
    </RestoreScroll>
  </Router>,
  document.getElementById("root")
);
