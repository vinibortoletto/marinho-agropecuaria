import React, { useState, useContext, useEffect } from 'react';

import { ProductContext } from '../../../helpers/Context';

// Components
import DividingLine from '../../../components/DividingLine';

// Styles
import { Container } from './styles';

export default function ProductItem({ title, price, amount, img, id }) {
  const context = useContext(ProductContext);

  const { cart, setCart } = context;
  const [productAmount, setProductAmount] = useState(amount);
  const [subtotal, setSubtotal] = useState(0);

  function updateSubtotal() {
    setSubtotal((price * productAmount).toFixed(2));
  }

  function increaseProductAmount() {
    const newCart = [...cart];

    newCart.forEach((product) => {
      if (product.sys.id === id) {
        product.fields.amount += 1;
        setProductAmount(product.fields.amount);
      }
    });

    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function decreaseProductAmount() {
    const newCart = [...cart];

    newCart.forEach((product) => {
      if (product.sys.id === id && product.fields.amount > 0) {
        product.fields.amount -= 1;
        setProductAmount(product.fields.amount);
      }

      if (product.fields.amount === 0) {
        newCart.pop(product);
        window.location.reload(true);
      }
    });

    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
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

  useEffect(() => {
    updateSubtotal();
  }, [productAmount]);

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
              <span className="amount">{productAmount}</span>
              <button className="increase_btn" onClick={increaseProductAmount} type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <DividingLine bgColor="var(--d_gold);" />
      </div>

      <h3 className="subtotal">
        <span>Subtotal:</span> R${subtotal}
      </h3>
    </Container>
  );
}
