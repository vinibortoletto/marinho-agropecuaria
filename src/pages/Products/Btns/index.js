import React, { useEffect, useState } from 'react';
// Components
import { ButtonPill } from '../../../components/Buttons/styles';
import { useProduct } from '../../../contexts/Product';
// Styles
import { Container } from './styles';

export default function Btns({ handleShowSidebar }) {
  const [sortOption, setSortOption] = useState('');

  const { handleSortProducts } = useProduct();

  function changeSortOption(event) {
    setSortOption(event.target.value);
    localStorage.setItem('sortOption', JSON.stringify(event.target.value));

    handleSortProducts(event.target.value);
  }

  useEffect(() => {
    const localSortOption = JSON.parse(localStorage.getItem('sortOption'));

    if (localSortOption) {
      setSortOption(localSortOption);
    } else {
      localStorage.setItem('sortOption', JSON.stringify('mais vendidos'));
    }
  }, []);

  return (
    <Container className="btns_container">
      <ButtonPill
        onClick={handleShowSidebar}
        className="bnt_advanced_search"
        transparent
        mini
      >
        Busca avançada
      </ButtonPill>

      <div className="select_container">
        <select
          onChange={changeSortOption}
          value={sortOption}
          name="sortOptions"
          id="sortOptions"
        >
          <option value="mais vendidos">Mais vendidos</option>
          <option value="menor preço">Menor preço</option>
          <option value="maior preço">Maior preço</option>
        </select>
        <div className="arrow" />
      </div>
    </Container>
  );
}
