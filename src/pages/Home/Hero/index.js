import React from "react";

// Styles
import { ButtonPill } from "../../../components/Buttons/styles";
import { Styles as Section } from "./styles";
import Banner from "../../../components/Banner/index";

export default function Hero({ img, title, subtitle }) {
  return (
    <Section>
      <Banner overlay img={img} alt="cachorros" />

      <div className="content">
        <div className="text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>

      <ButtonPill>Explorar</ButtonPill>
    </Section>
  );
}
