import React from 'react';
import { useSearch } from '../../../../contexts/Search';
import { Container } from './styles';

export default function SearchBar() {
  const { goToProductsPage, searchProducts } = useSearch();

  return (
    <Container className="searchbar">
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
    </Container>
  );
}
