import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarCategories from "./NavbarCategories";
import NavbarBottom from "./NavbarBottom";

import { Container } from "./styles";

export default function Navbars({ simple }) {
  return (
    <Container simple={simple}>
      <NavbarTop simple={simple} />
      {!simple && (
        <>
          <NavbarCategories />
          <NavbarBottom />
        </>
      )}
    </Container>
  );
}
