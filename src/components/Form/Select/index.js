import React from "react";

// Components
import { ButtonPill } from "../../../components/Buttons/styles";

// Styles
import { Container } from "./styles";

export default function Select({ mini, defaultTitle, options }) {
  function handleSortBtn() {
    const sortOptions = document.querySelector(".sort_options");
    sortOptions.classList.toggle("toggle");

    const arrowIcon = document.querySelector(".btn_sort_arrow");
    arrowIcon.classList.toggle("toggle");
  }

  return (
    <Container mini={mini}>
      <div className="select_container">
        <ButtonPill
          className="btn_sort"
          onClick={handleSortBtn}
          transparent
          mini
        >
          {defaultTitle}
          <i className="fas fa-chevron-down btn_sort_arrow" />
        </ButtonPill>

        <div className="sort_options">
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
