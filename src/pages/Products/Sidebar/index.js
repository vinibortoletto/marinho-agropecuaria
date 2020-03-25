import React from "react";

import { Container } from "./styles";

// Components
import Categories from "./Categories/index";
import Prices from "./Prices/index";
import Ranking from "./Ranking/index";

export default function Sidebar() {
  return (
    <Container className="sidebar">
      <Categories />
      <Prices />
      <Ranking />
    </Container>
  );
}
