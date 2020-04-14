import React from "react";
import { Link } from "react-router-dom";

// Images
import mainLogo from "../../../images/logos/my_logo/main.png";
import whiteLogo from "../../../images/logos/my_logo/white.png";

// Components
import SearchBar from "./SearchBar/index";
import Buttons from "./Buttons/index";

// Styles
import { Container } from "./styles";

export default function NavbarTop({ simple }) {
  return (
    <Container simple={simple} className="navbar_top">
      {!simple ? (
        <>
          <Link to="/">
            <img
              className="logo"
              src={mainLogo}
              alt="marinho agropecuária logo"
            />
          </Link>

          <SearchBar />
          <Buttons />
        </>
      ) : (
        <>
          <Link to="/">
            <img
              className="logo"
              src={whiteLogo}
              alt="marinho agropecuária logo"
            />
          </Link>
        </>
      )}
    </Container>
  );
}
