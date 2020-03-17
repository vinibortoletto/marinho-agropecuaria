import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import errorImg from "../../images/ux/404.svg";

// Components
import { Title } from "../../components/Title/styles";
import { ButtonSquare } from "../../components/Buttons/styles";
import Navbars from "../../components/Navbars/index";

// Styles
import { Container } from "./styles";

export default function PageNotFound() {
  useEffect(() => {
    // Removes mainHeader (navbars) and add a simpler one
    const root = document.getElementById("root");
    const main = document.querySelector("main");

    const mainHeader = document.querySelector("header");
    mainHeader.parentNode.removeChild(mainHeader);

    const simpleHeader = document.querySelector("main header");
    simpleHeader.parentNode.removeChild(simpleHeader);

    root.insertBefore(simpleHeader, root.firstChild);

    return () => {
      // Goes back to mainHeader, and remove the simpler one
      main.insertBefore(simpleHeader, main.firstChild);
      root.insertBefore(mainHeader, root.firstChild);
    };
  }, []);

  return (
    <>
      <Navbars simple />

      <Container className="page_not_found">
        <Title>Página não encontrada</Title>

        <div className="content">
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
        </div>
      </Container>
    </>
  );
}
