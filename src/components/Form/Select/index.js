import React, { useState, useEffect, useContext } from "react";

// Components
import { ButtonPill } from "../../../components/Buttons/styles";

// Styles
import { Container } from "./styles";

export default function Select({ mini, options }) {
  const [defaultOption, setDefaultOption] = useState(options[0]);

  function handleToggleAnimation() {
    // Shows options
    const sortOptions = document.querySelector(".sort_options");
    sortOptions.classList.toggle("toggle");

    // Arrow animations
    const arrowIcon = document.querySelector(".btn_sort_arrow");
    arrowIcon.classList.toggle("toggle");
  }

  function handleSortBtnChange() {
    const options = document.querySelectorAll(".sort_options li");

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        setDefaultOption(opt.innerText);
        handleToggleAnimation();
      });
    });
  }

  useEffect(() => {
    handleSortBtnChange();
  }, []);

  return (
    <Container mini={mini}>
      <div className="select_container">
        <ButtonPill
          className="btn_sort"
          onClick={handleToggleAnimation}
          transparent
          mini
        >
          {defaultOption}
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
