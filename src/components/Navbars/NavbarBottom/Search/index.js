import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../../../../helpers/Context';

import { Container } from './styles';

export default function Search({ toggleShowSearch }) {
  const history = useHistory();

  const context = useContext(ProductContext);
  const { searchContent, setSearchContent } = context;

  function searchProducts(e) {
    const inputContent = e.target.value;

    // Remove accents from letters and devide words into different arrays
    const newInputContent = inputContent
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .split(' ');

    setSearchContent(newInputContent);
  }

  function goToProductsPage(e) {
    if (e.key === 'Enter' && searchContent.length > 0) {
      let newSearchContent = searchContent;

      // Turn array into string
      newSearchContent =
        typeof searchContent === 'object'
          ? newSearchContent.toString().replace(/,/g, ' ')
          : null;

      // Change route
      history.push(`/produtos/${newSearchContent}`);

      // Hide Search
      toggleShowSearch();
    }
  }

  useEffect(() => {
    // Toggle search icon opacity
    const input = document.querySelector('.input_container input');
    const icon = document.querySelector('.input_container i');

    input.onclick = () => {
      icon.style.opacity = 1;
    };

    input.onblur = () => {
      icon.style.opacity = 0.5;
    };
  }, []);

  return (
    <Container className="navbar_search_mobile">
      <label htmlFor="search_products">Pesquise um produto</label>
      <div className="input_container">
        <input
          id="search_products"
          onChange={searchProducts}
          onKeyDown={goToProductsPage}
          type="search"
          placeholder="Ex.: Ração de gato"
          aria-label="Pesquise produtos do site"
        />
        <i className="fas fa-search" />
      </div>
    </Container>
  );
}
