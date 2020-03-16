import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

// Shared Components
import Footer from "./components/Footer/index";

// Pages
import Home from "./pages/Home/index.js";
import PageNotFound from "./pages/PageNotFound/index.js";

// Styles
import { NavbarWrapper } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyles />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </main>

      <Footer />
    </>
  );
}
