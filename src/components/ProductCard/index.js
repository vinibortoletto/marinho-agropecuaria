import React from "react";

// Components
import Stars from "../Stars/index";

// Styles
import { Container } from "./styles";

export default function ProductCard({ img, title, price, paymentMethod }) {
  return (
    <Container className="product_card">
      <div className="img_container">
        <img src={img} alt="produto" />
      </div>

      <h1>{title}</h1>

      <Stars />

      <div className="price">
        <h2>R${price}</h2>
        <h3>até 6x de R$3,16 no cartão</h3>
      </div>
    </Container>
  );
}
