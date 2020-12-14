import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context';

// Components
import { ButtonPill } from '../../Buttons/styles';

// Styles
import { Container } from './styles';

export default function Select({ mini, options, productList, cart }) {
  const location = useLocation();
  const context = useContext(ProductContext);
  const [defaultOption, setDefaultOption] = useState(options[0]);

  function handleToggleAnimation() {
    // Shows options
    const sortOptions = document.querySelector('.sort_options');
    sortOptions.classList.toggle('toggle');

    // Arrow animations
    const arrowIcon = document.querySelector('.btn_sort_arrow');
    arrowIcon.classList.toggle('toggle');
  }

  function handleSortBtnChange(id) {
    const selectBtnOptions = document.querySelectorAll('.sort_options li');

    selectBtnOptions.forEach((option) => {
      if (option.id === id.toString()) {
        setDefaultOption(option.innerText);
        handleToggleAnimation();

        if (productList) {
          context.handleSortProducts(option.innerText);
          context.saveSortOption(option.innerText);
        }
      }
    });
  }

  // Saves sortOption in LocalStorage
  useEffect(() => {
    if (location.pathname.includes('produtos')) {
      const checkLocalStorage = localStorage.getItem('sortOption');

      if (checkLocalStorage === null) {
        context.saveSortOption(defaultOption);
      } else {
        context.getSortOption(setDefaultOption);
      }
    }
  }, []);

  return (
    <Container mini={mini}>
      <div className="select_container">
        <ButtonPill className="btn_sort" onClick={handleToggleAnimation} transparent mini>
          {defaultOption}
          <i className="fas fa-chevron-down btn_sort_arrow" />
        </ButtonPill>

        <div className="sort_options">
          <ul>
            {options.map((option, index) => (
              <li key={index} id={index} onClick={() => handleSortBtnChange(index)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
