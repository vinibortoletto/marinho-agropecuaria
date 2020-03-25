import React from "react";

// Components
import { ButtonPill } from "../../../components/Buttons/styles";

// Styles
import { Container } from "./styles";

export default function Btns() {
  function handleSelectBtn() {
    console.log("working");
  }

  return (
    <Container className="btns_container">
      <ButtonPill className="advanced_search" transparent mini>
        Busca avançada
      </ButtonPill>

      <div className="btn_select_container">
        <ButtonPill onClick={handleSelectBtn} transparent mini>
          Mais vendidos
          <i className="fas fa-chevron-down" />
        </ButtonPill>

        <div className="options">
          <ul>
            <li>Mais vendidos</li>
            <li>Menor preços</li>
            <li>Mair preços</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
