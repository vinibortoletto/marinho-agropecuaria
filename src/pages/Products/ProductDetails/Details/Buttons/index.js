import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../../../../contexts/Product';

import { ButtonSquare } from '../../../../../components/Buttons/styles';
import { Container } from './styles';

export default function Buttons() {
  const context = useContext(ProductContext);
  const { setCart, selectedProduct, cart } = context;

  function addSelectedProductToCart() {
    const newCart = cart;
    const newSelectedProduct = selectedProduct;

    const productAlreadyInCart = newCart.find(
      (product) => product.fields.title === newSelectedProduct[0].fields.title,
    );

    if (newCart.length === 0 || !productAlreadyInCart) {
      newSelectedProduct[0].fields.amount = 1;
      newCart.push(...newSelectedProduct);
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <Container>
      <Link to="/carrinho">
        <div className="add_to_cart">
          <ButtonSquare onClick={addSelectedProductToCart}>
            Adicionar ao carrinho
          </ButtonSquare>
        </div>
      </Link>
    </Container>
  );
}
