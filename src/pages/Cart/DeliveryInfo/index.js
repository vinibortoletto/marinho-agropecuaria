import React from "react";

// Components
import DividingLine from "../../../components/DividingLine";
import { ButtonSquare } from "../../../components/Buttons/styles";
import Radio from "../../../components/Form/Radio";

// Styles
import { Container } from "./styles";

export default function DeliveryInfo() {
  return (
    <Container>
      <DividingLine />

      <div className="delivery_options">
        <Radio
          label="Vou retirar os produtos na loja física"
          name="deliveryOption"
          value="storeDelivery"
        />
        <Radio
          label="Quero receber os produtos em casa"
          name="deliveryOption"
          value="homeDelivery"
        />
      </div>

      <DividingLine />

      <div className="cep_number">
        <h1>Digite seu CEP para calcular o frete</h1>

        <div className="input_wrapper">
          <label htmlFor="cepNumber">
            <input type="number" placeholder="12345-678" />
          </label>

          <ButtonSquare mini>Calcular</ButtonSquare>
        </div>

        <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/">
          Não sei meu CEP
        </a>
      </div>
    </Container>
  );
}
