import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import ProductItem from "./ProductItem";
import DeliveryInfo from "./DeliveryInfo";

// Styles
import { Container } from "./styles";

export default function Cart() {
  return (
    <Container>
      <Title>Carrinho</Title>

      <div className="content">
        <div>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <div>
          <DeliveryInfo />
        </div>
      </div>
    </Container>
  );
}
