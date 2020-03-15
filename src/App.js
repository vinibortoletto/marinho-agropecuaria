import React, { useEffect } from "react";
import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

import NavbarTop from "./components/Navbars/NavbarTop/index.js";
import NavbarCategories from "./components/Navbars/NavbarCategories/index.js";
import NavbarBottom from "./components/Navbars/NavbarBottom/index.js";
import Home from "./pages/Home/index.js";
import Footer from "./components/Footer/index";

function App() {
  function handleScroll() {
    const navbarCategories = document.querySelector(".navbar_categories");

    window.addEventListener("scroll", () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > 220) {
        navbarCategories.classList.add("toggle");
      } else {
        navbarCategories.classList.remove("toggle");
      }
    });
  }

  useEffect(() => {
    handleScroll();
  }, []);

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
