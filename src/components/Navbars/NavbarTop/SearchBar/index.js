import React from "react";

import { Container } from "./styles";

export default function SearchBar() {
  return (
    <Container>
      <p>O que você está procurando?</p>
      <i className="fas fa-search" />
    </Container>
  );
}
