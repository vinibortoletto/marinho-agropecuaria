import React from "react";
import { Link } from "react-router-dom";

// Images
import errorImg from "../../images/ux/404.svg";

// Components
import { Title } from "../../components/Title/styles";
import { ButtonSquare } from "../../components/Buttons/styles";
import NavbarTop from "../../components/Navbars/NavbarTop/index";

// Styles
import { Section } from "./styles";

export default function PageNotFound() {
  return (
    <>
      <NavbarTop simple />

      <Section>
        <Title>Página não encontrada</Title>

        <section className="content">
          <div>
            <img src={errorImg} alt="página não encontrada" />
          </div>

          <div>
            <div className="text">
              <h1>A página que está procurando parece não existir</h1>
              <h2>
                Verifique o endereço que digitou ou entre em
                <Link to="/contato">
                  <span> contato conosco.</span>
                </Link>
              </h2>
            </div>

            <hr />

            <Link to="/">
              <ButtonSquare transparent mini>
                <i className="fas fa-arrow-left" />
                Voltar ao início
              </ButtonSquare>
            </Link>
          </div>
        </section>
      </Section>
    </>
  );
}
