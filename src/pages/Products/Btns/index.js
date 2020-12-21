import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../../helpers/Context';

// Components
import { ButtonPill } from '../../../components/Buttons/styles';

// Styles
import { Container } from './styles';

export default function Btns({ handleShowSidebar }) {
  const [sortOption, setSortOption] = useState('');
  const context = useContext(ProductContext);
  const { handleSortProducts } = context;

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
      <ButtonPill onClick={handleShowSidebar} className="bnt_advanced_search" transparent mini>
        Busca avançada
      </ButtonPill>

      <select onChange={changeSortOption} value={sortOption} name="sortOptions" id="sortOptions">
        <option value="mais vendidos">Mais vendidos</option>
        <option value="menor preço">Menor preço</option>
        <option value="maior preço">Maior preço</option>
      </select>
    </Container>
  );
}
