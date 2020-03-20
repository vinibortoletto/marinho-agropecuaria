import React from "react";

import { Container } from "./styles";

export default function SearchBar() {
  return (
    <Container className="searchbar">
      <input type="text" placeholder="O que você está procurando?" />
      <i className="fas fa-search" />
    </Container>
  );
}
