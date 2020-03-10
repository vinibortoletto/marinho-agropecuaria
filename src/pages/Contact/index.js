import React from "react";

import { Title } from "../../components/Title/styles";
import InfoCards from "./InfoCards/index";
import ContactForm from "./ContactForm/index";
import { Styles as Section } from "./styles";

export default function Contact() {
  return (
    <Section className="section_margin">
      <Title>Contato</Title>

      <div className="content">
        <InfoCards />

        <h1 className="form_header">
          Ainda precisa de ajuda? Envie-nos uma mensagem
        </h1>

        <ContactForm />

        <div className="social_media">
          <p>Siga nossas redes sociais</p>

          <div>
            <i className="fab fa-instagram" />
            <i className="fab fa-facebook-f" />
          </div>
        </div>
      </div>
    </Section>
  );
}
