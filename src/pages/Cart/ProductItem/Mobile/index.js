import React from "react";

// Components
import DividingLine from "../../../../components/DividingLine";
import Select from "../../../../components/Form/Select";

// Styles
import { Container } from "./styles";

export default function Mobile({ product }) {
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

        <Select mini cart options={["1", "2", "3", "4", "5"]} />
      </div>

      <DividingLine bgColor="var(--d_gold);" />

      <h3 className="subtotal">
        <span>Subtotal:</span> R$50,00
      </h3>
    </Container>
  );
}
