import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Container } from "./styles";
import { ButtonSquare } from "../../../components/Buttons/styles";

export default function ProductList() {
  const [itemsToShow, setItemsToShow] = useState(5);

  function handleItemsToShow() {
    setItemsToShow(itemsToShow + 3);
  }

  return (
    <Container>
      <div className="products_list">
        <ProductConsumer>
          {(value) => {
            return value.products.map(
              (product, index) =>
                index <= itemsToShow && (
                  <Link key={product.sys.id} to="/detalhes-do-produto">
                    <ProductCard
                      img={product.fields.img.fields.file.url}
                      title={product.fields.title}
                      price={product.fields.price}
                    />
                  </Link>
                )
            );
          }}
        </ProductConsumer>
      </div>

      <div className="button_container">
        <ButtonSquare mini transparent onClick={handleItemsToShow}>
          ver mais produtos
        </ButtonSquare>
      </div>
    </Container>
  );
}
