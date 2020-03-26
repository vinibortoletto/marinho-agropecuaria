import React, { useState } from "react";

import { Container } from "./styles";

export default function SearchBar() {
  const [active, setActive] = useState(false);

  function handleInputActive(action) {
    action === "click" ? setActive(true) : setActive(false);
  }

  return (
    <Container active={active} className="searchbar">
      <input
        onClick={() => handleInputActive("click")}
        onBlur={() => handleInputActive()}
        type="text"
        placeholder="O que você está procurando?"
      />
      <i className="fas fa-search" />
    </Container>
  );
}
