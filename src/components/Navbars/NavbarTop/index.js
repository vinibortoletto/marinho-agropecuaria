import React from "react";

// Components
import Header from "./Header/index";
import Categories from "./Categories/index";

// Styles
import { Container } from "./styles";

export default function NavbarTop({ simple, home }) {
  return (
    <Container simple={simple} home={home}>
      {!simple ? (
        <>
          <Header />
          <Categories />
        </>
      ) : (
        <Header simple={simple} />
      )}
    </Container>
  );
}
