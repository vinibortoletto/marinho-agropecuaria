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
      <h2 className="title">Produtos relacionados</h2>

      <div className="content">
        <div className="products_list">
          <ProductConsumer>
            {(value) => {
              if (value.selectedProduct.length > 0) {
                let selectedProductTags = value.selectedProduct[0].fields.tags.split(
                  ", "
                )[0];

                let relatedProducts = value.products.filter((product) =>
                  product.fields.tags.includes(selectedProductTags)
                );

                if (relatedProducts.length < 4) {
                  let randomProduct =
                    value.products[
                      Math.floor(Math.random() * value.products.length)
                    ];

                  relatedProducts.push(randomProduct);
                }

                return relatedProducts.map(
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
                          loaded
                          className="product_card"
                          img={product.fields.img.fields.file.url}
                          title={product.fields.title}
                          price={product.fields.price}
                        />
                      </Link>
                    )
                );
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </Container>
  );
}
