import React from "react";

import { Container } from "./styles";

export default function Description({ description }) {
  return (
    <Container>
      <h2>Descrição do produto</h2>
      <p>{description}</p>
    </Container>
  );
}
