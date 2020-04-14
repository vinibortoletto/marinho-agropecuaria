import React from "react";

// Components
import DividingLine from "../../../components/DividingLine";
import DeliveryOptions from "./DeliveryOptions";
import CepNumber from "./CepNumber";

// Styles
import { Container } from "./styles";

export default function DeliveryInfo() {
  return (
    <Container>
      <DividingLine margin="var(--m_lg)" />

      <DeliveryOptions />

      <DividingLine margin="var(--m_lg)" />

      <CepNumber />
    </Container>
  );
}
