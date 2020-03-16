import React from "react";
import { Link } from "react-router-dom";

// Images
import mainLogo from "../../../../images/logos/my_logo/main.png";
import whiteLogo from "../../../../images/logos/my_logo/white.png";

// Components
import SearchBar from "./SearchBar/index";
import Buttons from "./Buttons/index";

// Styles
import { Navbar } from "./styles";

export default function Header({ simple }) {
  return (
    <>
      {!simple ? (
        <Navbar>
          <Link to="/">
            <img className="logo" src={mainLogo} alt="marinho logo" />
          </Link>

          <SearchBar />
          <Buttons />
        </Navbar>
      ) : (
        <Navbar green>
          <Link to="/">
            <img className="logo" src={whiteLogo} alt="marinho logo" />
          </Link>
        </Navbar>
      )}
    </>
  );
}
