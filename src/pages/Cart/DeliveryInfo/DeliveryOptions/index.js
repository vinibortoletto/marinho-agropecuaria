import React, { useState, useEffect } from "react";

// Components
import Radio from "../../../../components/Form/Radio";

// Styles
import { Container } from "./styles";

export default function DeliveryOptions() {
  const [deliveryOption, setDeliveryOption] = useState("homeDelivery");

  function handleChange(e) {
    const radioValue = e.target.value;
    setDeliveryOption(radioValue);

    console.log(document.getElementsByName("deliveryOption"));
  }

  useEffect(() => {
    const cepNumber = document.querySelector(".cepNumber");

    deliveryOption === "storeDelivery"
      ? cepNumber.classList.add("mute")
      : cepNumber.classList.remove("mute");
  }, [deliveryOption]);

  return (
    <Container>
      <Radio
        label="Vou retirar os produtos na loja física"
        name="deliveryOption"
        value="storeDelivery"
        checked={deliveryOption === "storeDelivery" && "checked"}
        handleChange={handleChange}
      />
      <Radio
        label="Quero receber os produtos em casa"
        name="deliveryOption"
        value="homeDelivery"
        checked={deliveryOption === "homeDelivery" && "checked"}
        handleChange={handleChange}
      />
    </Container>
  );
}
