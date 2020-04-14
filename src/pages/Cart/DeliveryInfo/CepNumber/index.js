import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

// Components
import { ButtonSquare } from "../../../../components/Buttons/styles";

// Styles
import { Container } from "./styles";

export default function CepNumber() {
  const [cepNumber, setCepNumber] = useState(0);

  function handleTaxCalc() {
    //get total value of products
    //multiply by 0.1 to get a random tax value
  }

  // useEffect(() => {
  //   const radioBtns = document.getElementsByName("deliveryOption");
  //   let storeDeliveryBtn;

  //   radioBtns.forEach((btn) => {
  //     btn.value === "storeDelivery" && (storeDeliveryBtn = btn);
  //   });

  //   // storeDeliveryBtn.addEventListener("change", () => {
  //   // storeDeliveryBtn.isChecked();
  //   // });

  //   storeDeliveryBtn.checked
  //     ? console.log("working")
  //     : console.log("not working");

  //   // storeDeliveryBtn.checked === true
  //   //   ? console.log("working")
  //   //   : console.log("failed");

  //   // console.log(storeDeliveryBtn);
  // }, []);

  return (
    <Container className="cepNumber">
      <h1>Digite seu CEP para calcular o frete</h1>

      <div className="input_wrapper">
        <InputMask
          name="cepNumber"
          mask="99999-999"
          maskChar=""
          placeholder="12345-678"
          onChange={(e) => {
            setCepNumber(e.target.value);
          }}
        />

        <ButtonSquare mini onClick={handleTaxCalc}>
          Calcular
        </ButtonSquare>
      </div>

      <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/">
        Não sei meu CEP
      </a>
    </Container>
  );
}
