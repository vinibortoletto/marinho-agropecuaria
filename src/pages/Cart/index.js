import React, { useState, useEffect, useContext } from 'react';
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

  // useEffect(() => {
  //   localStorage.setItem('categories', JSON.stringify([]));
  // }, []);

  /* 
    DISPLAY CART PRODUCTS INSIDE CART
      - get cart products
      - map products
      - display them using default settings
  */

  function displayCartProducts() {
    return cart.map((product, index) => {
      const { title, price } = product.fields;
      const img = product.fields.img.fields.file.url;

      return (
        <>
          <div key={index} className="product_list">
            <ProductItem title={title} price={price} img={img} />
          </div>
        </>
      );
    });
  }

  // useEffect(() => {
  // displayCartProducts();
  // }, [cart]);

  return (
    <Container>
      <Title>Carrinho</Title>

      <div className="content">
        <div className="product_list">
          <ProductItem />
        </div>
        {/* {displayCartProducts()} */}
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
