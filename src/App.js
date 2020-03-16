import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

// Shared Components
import NavbarTop from "./components/Navbars/NavbarTop/index.js";
import NavbarCategories from "./components/Navbars/NavbarCategories/index.js";
import NavbarBottom from "./components/Navbars/NavbarBottom/index.js";
import Footer from "./components/Footer/index";

// Pages
import Home from "./pages/Home/index.js";
import PageNotFound from "./pages/PageNotFound/index.js";

// Styles
import { NavbarWrapper } from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />

      <NavbarWrapper>
        <NavbarTop />
        <NavbarCategories />
      </NavbarWrapper>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

      <NavbarBottom />
      <Footer />
    </>
  );
}

export default App;
