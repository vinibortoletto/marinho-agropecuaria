import React from "react";

// Image
import product from "../../images/products/product_sample.png";

// Components
import Stars from "../Stars/index";

// Styles
import { Container } from "./styles";

export default function ProductCard() {
  return (
    <Container className="product_card">
      <div className="img_container">
        <img src={product} alt="produto" />
      </div>

      <h1>ração para cães (porte grande)</h1>

      <Stars />

      <div className="price">
        <h2>R$50,00</h2>
        <h3>até 6x de R$3,16 no cartão</h3>
      </div>
    </Container>
  );
}
