import React from "react";

import { Container } from "./styles";
import { ButtonBullet } from "../../Buttons/styles";

export default function Navbar() {
  return (
    <Container>
      <section>
        <h1>Mais informações</h1>

        <ul>
          <li>
            <a href="#">Quem somos</a>
          </li>
          <li>
            <a href="#">Termos e condições</a>
          </li>
          <li>
            <a href="#">Trocas e devoluções</a>
          </li>
          <li>
            <a href="#">Formas de pagamento</a>
          </li>
          <li>
            <a href="#">Termos de compra</a>
          </li>
        </ul>
      </section>

      <section>
        <h1>Contato</h1>

        <ul>
          <li>
            <a href="#">Envie uma mensagem</a>
          </li>
          <li>
            <a href="#">Atendimento</a>
          </li>
        </ul>
      </section>

      <section>
        <h1>Fique atualizado</h1>

        <input type="text" placeholder="Cadastre seu email" />

        <div className="btn_wrapper">
          <ButtonBullet mini>Cadastrar</ButtonBullet>
        </div>
      </section>
    </Container>
  );
}
