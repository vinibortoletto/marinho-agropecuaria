import React, { useState, useContext } from 'react';

import { ProductContext } from '../../../helpers/Context';

// Components
import DividingLine from '../../../components/DividingLine';

// Styles
import { Container } from './styles';

export default function ProductItem({ title, price, amount, img, id }) {
  const context = useContext(ProductContext);
  const { cart, setCart } = context;
  const [productAmout, setProductAmout] = useState(amount);

  function increaseProductAmount() {
    const newCart = cart;

    newCart.map((product) => {
      if (product.sys.id === id) {
        product.fields.amount += 1;
        setProductAmout(product.fields.amount);
      }
    });

    setCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function decreaseProductAmount() {
    const newCart = cart;

    newCart.map((product) => {
      if (product.sys.id === id && product.fields.amount > 0) {
        product.fields.amount -= 1;
        setProductAmout(product.fields.amount);
      }

      if (product.fields.amount === 0) {
        newCart.pop(product);
        window.location.reload(true);
      }
    });

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function removeProduct() {
    const newCart = cart;

    newCart.map((product) => {
      return product.sys.id === id && newCart.pop(product);
    });

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.location.reload(true);
  }

  return (
    <Container>
      <div>
        <div className="product_info">
          <div>
            <img src={img} alt="produto" />
          </div>
          <div className="product_content">
            <h1 className="title">{title}</h1>
            <h2 className="price">Valor unit.: R${price}</h2>
            <button onClick={removeProduct} type="button" className="remove_item">
              <i className="fas fa-times" />
              Remover item
            </button>
          </div>

          <div className="quantity">
            <p>Qtd: </p>
            <div>
              <button className="decrease_btn" onClick={decreaseProductAmount} type="button">
                -
              </button>
              <span className="amount">{productAmout}</span>
              <button className="increase_btn" onClick={increaseProductAmount} type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <DividingLine bgColor="var(--d_gold);" />
      </div>

      <h3 className="subtotal">
        <span>Subtotal:</span> R$50,00
      </h3>
    </Container>
  );
}
