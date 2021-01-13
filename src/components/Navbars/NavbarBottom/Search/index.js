import React from 'react';
import { useSearch } from '../../../../helpers/Context/Search';
import { Container } from './styles';

export default function Search() {
  const { goToProductsPage, searchProducts } = useSearch();

  return (
    <Container className="navbar_search_mobile">
      <div className="input_container">
        <label htmlFor="search_products">Pesquise um produto</label>
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
