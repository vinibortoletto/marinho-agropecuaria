import React from "react";

// Components
import Title from "./Title";
import Stars from "../../../../components/Stars/index";
import Description from "./Description";
import Price from "./Price";
import Buttons from "./Buttons";

// Styles
import { Container } from "./styles";

export default function Details() {
  return (
    <Container className="product_info">
      <Title />
      <Stars />
      <Description />

      <hr />

      <div className="price_and_btn_wrapper">
        <Price />
        <Buttons />
      </div>
    </Container>
  );
}
