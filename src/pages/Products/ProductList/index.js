import React from "react";
import { Link } from "react-router-dom";
// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";

export default function ProductList() {
  return (
    <Container>
      <Link to="/detalhes-do-produto">
        <ProductCard />
      </Link>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}
