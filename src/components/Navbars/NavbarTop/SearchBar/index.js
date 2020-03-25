import React, { useState } from "react";

import { Container } from "./styles";

export default function SearchBar() {
  const [active, setActive] = useState(false);

  function handleInputActive() {
    active ? setActive(false) : setActive(true);
  }

  return (
    <Container active={active} className="searchbar">
      <input
        onClick={handleInputActive}
        onBlur={handleInputActive}
        type="text"
        placeholder="O que você está procurando?"
      />
      <i className="fas fa-search" />
    </Container>
  );
}
