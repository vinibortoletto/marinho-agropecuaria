import React, { useState } from "react";

import { Container } from "./styles";
import { ButtonBullet, ButtonPill } from "../../../Buttons/styles";

export default function SubmitButton({ isSubmitting, subscribe, cep }) {
  const [buttonContent, setButtonContent] = useState("Enviar");

  function handleSubmitAnimation() {
    const btn = document.querySelectorAll(".submit_btn");

    setTimeout(() => {
      btn.forEach((btn) => {
        if (btn.hasAttribute("disabled")) {
          const loadingBg = btn.firstElementChild;

          cep
            ? setButtonContent("Calculando...")
            : setButtonContent("Enviando...");
          loadingBg.classList.add("loading_animation");

          setTimeout(() => {
            cep ? setButtonContent("Calculado!") : setButtonContent("Enviado!");

            setTimeout(() => {
              cep ? setButtonContent("Calcular") : setButtonContent("Enviar");

              loadingBg.classList.remove("loading_animation");
            }, 2000);
          }, 2000);
        }
      });
    }, 10);
  }

  return (
    <Container>
      {subscribe ? (
        <ButtonBullet
          className="submit_btn"
          disabled={isSubmitting}
          mini
          type="submit"
          onClick={handleSubmitAnimation}
        >
          <div className="loading_bg"></div>
          <p>{buttonContent}</p>
        </ButtonBullet>
      ) : (
        <ButtonPill
          className="submit_btn"
          disabled={isSubmitting}
          mini
          type="submit"
          onClick={handleSubmitAnimation}
        >
          <div className="loading_bg"></div>
          <p>{buttonContent}</p>
        </ButtonPill>
      )}
    </Container>
  );
}
