import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Styles
import { Styles as Section } from "./styles";
import { Title } from "../../../components/Title/styles";
import { ButtonSquare } from "../../../components/Buttons/styles";

export default function BestSellers() {
  return (
    <Section className="section_margin">
      <Title>Os mais vendidos</Title>

      <div className="content">
        <div className="product_list">
          <ProductConsumer>
            {(value) => {
              return value.products.map(
                (product, index) =>
                  index <= 7 && (
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

        <div className="btn_container">
          <ButtonSquare mini transparent>
            <Link to="/produtos">Ver mais produtos</Link>
          </ButtonSquare>
        </div>
      </div>
    </Section>
  );
}
