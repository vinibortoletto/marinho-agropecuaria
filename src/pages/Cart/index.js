import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/Product';

// Components
import { Title } from '../../components/Title/styles';
import ProductItem from './ProductItem';
import DeliveryInfo from './DeliveryInfo';
import OrderSummary from './OrderSummary';

// Styles
import { Container } from './styles';

export default function Cart() {
  const context = useContext(ProductContext);
  const { cart } = context;

  function displayCartProducts() {
    return cart.map((product, index) => {
      const { title, price, amount } = product.fields;
      const img = product.fields.img.fields.file.url;
      const { id } = product.sys;

      return (
        <ProductItem
          key={index}
          title={title}
          price={price}
          amount={amount}
          subtotal={price * amount}
          img={img}
          id={id}
        />
      );
    });
  }

  function displayBackupCard() {
    return (
      <div className="empty_cart">
        <div>
          <p>Seu carrinho está vazio.</p>

          <Link to="produtos">
            <button type="button">Click para ver mais produtos</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Title>Carrinho</Title>

      <div className="content">
        <div className="product_list">
          {cart.length > 0 ? displayCartProducts() : displayBackupCard()}
        </div>

        <div className="delivery_info_box">
          <DeliveryInfo />
        </div>

        <div className="order_summary_box">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
}
