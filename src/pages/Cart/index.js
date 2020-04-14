import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import ProductItem from "./ProductItem";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";

// Styles
import { Container } from "./styles";

export default function Cart() {
  return (
    <Container>
      <Title>Carrinho</Title>

      <div className="content">
        <div className="product_list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <div>
          <DeliveryInfo />
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
}
