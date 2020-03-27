import React from "react";

import { ButtonSquare } from "../../../../../components/Buttons/styles";
import { Container } from "./styles";

export default function Buttons() {
  return (
    <Container>
      <div className="add_to_cart">
        <ButtonSquare>Adicionar ao carrinho</ButtonSquare>
      </div>
    </Container>
  );
}
