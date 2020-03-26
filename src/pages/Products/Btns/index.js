import React from "react";

// Components
import { ButtonPill } from "../../../components/Buttons/styles";

// Styles
import { Container } from "./styles";

export default function Btns() {
  function handleSortBtn() {
    const sortOptions = document.querySelector(".sort_options");
    sortOptions.classList.toggle("toggle");

    const arrowIcon = document.querySelector(".btn_sort_arrow");
    arrowIcon.classList.toggle("toggle");
  }

  return (
    <Container className="btns_container">
      <ButtonPill className="bnt_advanced_search" transparent mini>
        Busca avançada
      </ButtonPill>

      <div className="btn_select_container">
        <ButtonPill
          className="btn_sort"
          onClick={handleSortBtn}
          transparent
          mini
        >
          Mais vendidos
          <i className="fas fa-chevron-down btn_sort_arrow" />
        </ButtonPill>

        <div className="sort_options">
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
