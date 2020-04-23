import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";

export default function ProductList() {
  return (
    <Container>
      <ProductConsumer>
        {(value) => {
          return value.products.map((product) => (
            <Link to="/detalhes-do-produto">
              <ProductCard
                key={product.sys.id}
                img={product.fields.img.fields.file.url}
                title={product.fields.title}
                price={product.fields.price}
              />
            </Link>
          ));
        }}
      </ProductConsumer>
    </Container>
  );
}
