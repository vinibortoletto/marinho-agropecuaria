import React from 'react';

import { ButtonSquare } from '../../../../../components/Buttons/styles';
import { Container } from './styles';

export default function Buttons() {
  function addProductToCart() {
    console.log('working');
  }

  return (
    <Container>
      <div className="add_to_cart">
        <ButtonSquare onClick={addProductToCart}>Adicionar ao carrinho</ButtonSquare>
      </div>
    </Container>
  );
}
