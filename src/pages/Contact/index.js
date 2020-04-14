import React from "react";

import { Title } from "../../components/Title/styles";
import InfoCards from "./InfoCards/index";
import ContactForm from "./ContactForm/index";
import { Container } from "./styles";

export default function Contact() {
  return (
    <Container className="section_margin">
      <Title>Contato</Title>

      <section className="content">
        <InfoCards />

        <section className="form">
          <h1 className="form_header">
            Não encontrou o que procurava? <span>Envie uma mensagem!</span>
          </h1>
          <ContactForm />

          <div className="social_media">
            <p>Siga nossas redes sociais</p>

            <div>
              <a href="https://www.instagram.com/marinhoagropecuaria/">
                <i className="fab fa-instagram" />
              </a>

              <a href="https://www.facebook.com/marinhoagropecuaria">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
}
