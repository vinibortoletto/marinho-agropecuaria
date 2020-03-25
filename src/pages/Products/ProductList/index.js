import React from "react";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";

export default function ProductList() {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}
