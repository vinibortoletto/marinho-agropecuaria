import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../../Context";

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
          <ProductConsumer>
            {(value) => {
              return value.products.map(
                (product, index) =>
                  index <= 3 && (
                    <Link
                      onClick={() => {
                        value.findSelectedProduct(product.sys.id);
                      }}
                      key={product.sys.id}
                      to="/detalhes-do-produto"
                    >
                      <ProductCard
                        className="product_card"
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
      </div>
    </Container>
  );
}
