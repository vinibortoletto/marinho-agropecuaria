import React from "react";

// Components
import { Title } from "../../../../components/Title/styles";
import ProductCard from "../../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";

export default function RelatedProducts() {
  return (
    <Container>
      <Title>Produtos relacionados</Title>

      <div className="content">
        <div className="products_list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Container>
  );
}
