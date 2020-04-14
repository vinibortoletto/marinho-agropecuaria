import React, { useState } from "react";

import { Container } from "./styles";
import { ButtonPill } from "../../../../components/Buttons/styles";

export default function FormButtons({ isSubmitting }) {
  const [buttonContent, setButtonContent] = useState("Enviar");

  function handleSubmitAnimation() {
    const btn = document.querySelector(".submit_btn");
    const loadingBg = document.querySelector(".loading_bg");

    setTimeout(() => {
      if (btn.hasAttribute("disabled")) {
        setButtonContent("Enviando...");
        loadingBg.classList.add("loading_animation");

        setTimeout(() => {
          setButtonContent("Enviado!");

          setTimeout(() => {
            setButtonContent("Enviar");
            loadingBg.classList.remove("loading_animation");
          }, 2000);
        }, 2000);
      }
    }, 10);
  }

  // function handleReset() {
  //   window.confirm("Tem certeza de que quer limpar o formulário?") &&
  //     resetForm();
  // }

  return (
    <Container>
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
    </Container>
  );
}
