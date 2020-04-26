import React, { useState, useEffect } from "react";

// Styles
import { Container } from "./styles";

export default function Price({ price }) {
  const [creditNum, setCreditNum] = useState(0);

  function handleCreditNum() {
    if (price <= 50) {
      setCreditNum(2);
      return;
    } else if (price <= 100) {
      setCreditNum(4);
      return;
    } else if (price <= 200) {
      setCreditNum(6);
      return;
    }
  }

  useEffect(() => {
    handleCreditNum();
  }, []);

  return (
    <Container>
      <h3>R$ {price}</h3>
      <p>Em até {creditNum}x sem juros</p>
      <span>Calculadora de parcelas</span>
    </Container>
  );
}
