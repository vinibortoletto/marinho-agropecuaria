import React from "react";

import { ButtonSquare } from "../../../../../components/Buttons/styles";
import { Container } from "./styles";

export default function Buttons() {
  return (
    <Container>
      <div className="amount">
        <p>Quantidade:</p>

        <div className="box">
          <span>1</span>
          <i className="fas fa-chevron-down" />
        </div>

        <div className="amount_options"></div>
      </div>

      <div className="add_to_cart">
        <ButtonSquare>Adicionar ao carrinho</ButtonSquare>
      </div>
    </Container>
  );
}
