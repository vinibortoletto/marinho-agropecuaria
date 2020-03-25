import React from "react";

// Images
import productImg from "../../images/products/product_sample.png";

// Components
import { Title } from "../../components/Title/styles";
import Btns from "./Btns/index";
import Sidebar from "./Sidebar/index";
import ProductList from "./ProductList/index";

// Styles
import { Container } from "./styles";

export default function Products() {
  return (
    <Container>
      <Title>Produtos</Title>

      <div className="content">
        <Btns />

        <div className="sidebar_products_wrapper">
          <Sidebar />
          <ProductList />
        </div>
      </div>
    </Container>
  );
}
