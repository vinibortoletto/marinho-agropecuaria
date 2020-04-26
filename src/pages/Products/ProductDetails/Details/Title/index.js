import React, { useState, useEffect } from "react";

// Styles
import { Container } from "./styles";

export default function Title({ title }) {
  const [barcode, setBarcode] = useState(0);

  useEffect(() => {
    let randomNum = Math.floor(100000000000 + Math.random() * 900000000000000);
    setBarcode(randomNum);
  }, []);

  return (
    <Container>
      <h1>{title}</h1>
      <h6>Código de barras: {barcode}</h6>
    </Container>
  );
}
