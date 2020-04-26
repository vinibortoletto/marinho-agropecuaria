import React from "react";

// Styles
import { Container } from "./styles";

export default function Title({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <h6>Código de barras: 7891106006064</h6>
    </Container>
  );
}
