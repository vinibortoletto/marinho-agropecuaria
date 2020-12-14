import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../../../../helpers/Context';

import { ButtonSquare, ButtonBullet } from '../../../../../components/Buttons/styles';
import { Container } from './styles';

export default function Buttons() {
  const context = useContext(ProductContext);
  const { addProductToCart, setCart, selectedProduct } = context;

  function changeBtnText() {
    const addToCartBtn = document.querySelector('.add_to_cart button');
    addToCartBtn.innerText = 'Produto adicionado!';

    setTimeout(() => {
      addToCartBtn.innerText = 'Adicionar ao carrinho';
    }, 2000);

    addProductToCart(setCart, selectedProduct);
  }

  return (
    <Container>
      <div className="add_to_cart">
        <ButtonSquare onClick={changeBtnText}>Adicionar ao carrinho</ButtonSquare>
      </div>
      <div className="add_to_cart_and_go">
        <Link to="/carrinho">
          <ButtonBullet
            id="add_to_cart_and_go"
            onClick={() => addProductToCart(setCart, selectedProduct)}
          >
            Adicionar e ver carrinho
          </ButtonBullet>
        </Link>
      </div>
    </Container>
  );
}
