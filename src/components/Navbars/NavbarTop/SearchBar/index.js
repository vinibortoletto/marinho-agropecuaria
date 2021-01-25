import React from 'react';
import { useSearch } from '../../../../contexts/Search';
import { Container as Form } from './styles';

export default function SearchBar() {
  const { goToProductsPage, searchProducts } = useSearch();

  return (
    <Form onSubmit={goToProductsPage} className="searchbar">
      <label htmlFor="search_products">Pesquise um produto</label>

      <input
        id="search_products"
        onChange={searchProducts}
        type="text"
        placeholder="Ex.: Ração de gato"
        aria-label="Pesquise produtos do site"
      />

      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </Form>
  );
}
