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
        <div>
          <div className="product_list">
            <ProductItem />
          </div>

          <DeliveryInfo />
        </div>

        <OrderSummary />
      </div>
    </Container>
  );
}
