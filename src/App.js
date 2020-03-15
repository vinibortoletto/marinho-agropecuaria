import React from "react";
import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

import NavbarTop from "./components/Navbars/NavbarTop/index.js";
import NavbarCategories from "./components/Navbars/NavbarCategories/index.js";
import NavbarBottom from "./components/Navbars/NavbarBottom/index.js";
import Home from "./pages/Home/index.js";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <GlobalStyles />

      <NavbarTop />
      <NavbarCategories />
      <NavbarBottom />

      <Home />
      <Footer />
    </>
  );
}

export default App;
