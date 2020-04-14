import React from "react";

import { Container } from "./styles";
import { ButtonPill } from "../../../Buttons/styles";

export default function ResetButton({ isSubmitting, resetForm }) {
  function handleReset() {
    window.confirm("Tem certeza de que quer limpar o formulário?") &&
      resetForm();
  }

  return (
    <Container>
      <ButtonPill mini transparent type="button" onClick={handleReset}>
        <p>Limpar</p>
      </ButtonPill>
    </Container>
  );
}
