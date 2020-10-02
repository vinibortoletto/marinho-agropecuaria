import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../../Context';
// Components
import { ButtonPill } from '../../Buttons/styles';

// Styles
import { Container } from './styles';

export default function Select({ mini, options, productList, cart }) {
  const context = useContext(ProductContext);
  const [defaultOption, setDefaultOption] = useState(options[0]);
  // let products = context.products;
  const { sortedProducts } = context;

  function handleToggleAnimation() {
    // Shows options
    const sortOptions = document.querySelector('.sort_options');
    sortOptions.classList.toggle('toggle');

    // Arrow animations
    const arrowIcon = document.querySelector('.btn_sort_arrow');
    arrowIcon.classList.toggle('toggle');
  }

  function handleSortBtnChange(id) {
    const options = document.querySelectorAll('.sort_options li');

    options.forEach((opt) => {
      if (opt.id == id) {
        setDefaultOption(opt.innerText);
        handleToggleAnimation();

        if (productList) {
          context.handleSortProducts(opt.innerText);
          context.saveSortOption(opt.innerText);
        }
      }
    });
  }

  // Saves sortOption in LocalStorage
  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('sortOption');

    if (checkLocalStorage === null) {
      context.saveSortOption(defaultOption);
    } else {
      context.getSortOption(setDefaultOption);
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
