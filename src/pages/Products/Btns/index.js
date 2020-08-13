import React from "react";

// Components
import { ButtonPill } from "../../../components/Buttons/styles";
import Select from "../../../components/Form/Select";

// Styles
import { Container } from "./styles";

export default function Btns() {
  return (
    <Container className="btns_container">
      <ButtonPill className="bnt_advanced_search" transparent mini>
        Busca avançada
      </ButtonPill>

      <Select
        productList
        options={["Mais vendidos", "Menor preço", "Maior preço"]}
      />
    </Container>
  );
}
