import React, { useContext } from 'react';
import { ProductContext } from '../../helpers/Context';

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
        <ProductItem key={index} title={title} price={price} amount={amount} img={img} id={id} />
      );
    });
  }

  return (
    <Container>
      <Title>Carrinho</Title>

      <div className="content">
        <div className="product_list">{displayCartProducts()}</div>

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
