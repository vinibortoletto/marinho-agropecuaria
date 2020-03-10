import React, { useState } from "react";

import { Container } from "./styles";
import { ButtonPill } from "../../../Buttons/styles";

export default function ResetButton({ isSubmitting, resetForm }) {
  const [buttonContent, setButtonContent] = useState("Enviar");

  function handleReset() {
    window.confirm("Tem certeza de que quer limpar o formulário?") &&
      resetForm();
  }

  return (
    <Container>
      <ButtonPill
        // disabled={isSubmitting}
        mini
        transparent
        type="button"
        onClick={handleReset}
      >
        <p>Limpar</p>
      </ButtonPill>
    </Container>
  );
}
