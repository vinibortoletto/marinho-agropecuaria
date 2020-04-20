import React, { useState, useEffect } from "react";

// Components
import DividingLine from "../../../components/DividingLine";
import DeliveryOptions from "./DeliveryOptions";
import CepNumber from "./CepNumber";

// Styles
import { Container } from "./styles";

export default function DeliveryInfo() {
  const [windowWidth, setWindowWidth] = useState(0);

  function handleWidth() {
    setWindowWidth(window.outerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.outerWidth);
    });
  }

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <Container>
      <DividingLine margin="var(--m_lg)" />

      <div className="wrapper">
        <DeliveryOptions />

        {windowWidth < 750 && <DividingLine margin="var(--m_lg)" />}

        <CepNumber />
      </div>

      {windowWidth < 1000 && <DividingLine margin="var(--m_lg)" />}
    </Container>
  );
}
