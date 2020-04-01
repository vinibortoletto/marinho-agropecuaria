import React from "react";

// Images
import product from "../../../images/products/product_sample.png";

// Components
import DividingLine from "../../../components/DividingLine";

// Styles
import { Container } from "./styles";

export default function ProductItem() {
  return (
    <Container>
      <div className="product_info">
        <div>
          <img src={product} alt="produto" />
        </div>

        <div className="product_content">
          <h1 className="title">Nome do produto</h1>
          <h2 className="price">Valor unit.: R$50,00</h2>

          <button className="remove_item">
            <i className="fas fa-times" />
            Remover item
          </button>
        </div>

        <div className="counter">
          <button>
            <i className="fas fa-chevron-up" />
          </button>

          <p>1</p>

          <button>
            <i className="fas fa-chevron-down" />
          </button>
        </div>
      </div>

      <DividingLine bgColor="var(--d_gold);" />

      <h3 className="subtotal">
        <span>Subtotal:</span> R$50,00
      </h3>
    </Container>
  );
}
