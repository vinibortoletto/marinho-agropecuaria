import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSquare } from '../../../../../components/Buttons/styles';
import { useProduct } from '../../../../../contexts/Product';
import { Container } from './styles';

export default function Buttons() {
  const { setCart, selectedProduct, cart } = useProduct();

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
