import React from "react";

// Components
import { Title } from "../../../components/Title/styles";
import Gallery from "./Gallery";
import Details from "./Details";

// Styles
import { Container } from "./styles";

export default function ProductDetails() {
  return (
    <Container>
      <Title>Animais > Cães > Rações</Title>

      <div className="content">
        <Gallery />
        <Details />
      </div>
    </Container>
  );
}
