import React from 'react';

// Components
import { ButtonPill } from '../../../components/Buttons/styles';
import Select from '../../../components/Form/Select';

// Styles
import { Container } from './styles';

export default function Btns() {
  function handleShowSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const navbarCategories = document.querySelector('.navbar_categories');

    sidebar.classList.add('show');
    navbarCategories.classList.add('shrink');
  }

  return (
    <Container className="btns_container">
      <ButtonPill onClick={handleShowSidebar} className="bnt_advanced_search" transparent mini>
        Busca avançada
      </ButtonPill>

      <Select productList options={['Mais vendidos', 'Menor preço', 'Maior preço']} />
    </Container>
  );
}
