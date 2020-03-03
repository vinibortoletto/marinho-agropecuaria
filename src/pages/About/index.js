import React from "react";
import { Title } from "../../components/Title/styles";
import img from "../../images/banners/man.jpg";
import { Container } from "./styles";
import Banner from "../../components/Banner/index";

export default function About() {
  return (
    <Container>
      <Title>Quem somos</Title>

      <div className="content">
        <div className="wrapper">
          <Banner img={img} alt="homem olhando para um campo" />
        </div>

        <div>
          <p>
            A <span>Marinho Agropecuária</span> foi fundada em Piracicaba,
            interior de São Paulo, em 1987.
          </p>

          <p>
            Uma singela loja de bairro voltada a suprir as necessidades dos
            pequenos criadores e donos de animais de médio e grande porte. Com o
            passar do tempo a loja se tornou uma das maiores agropecuárias da
            região, tendo hoje em estoque mais de 20 mil produtos variados,
            sendo alguns deles, peças e suprimentos para piscina, alimentos para
            animais, ferramentas para jardinagem, dentre outros. Com a pretensão
            de atender também o público de fora da cidade, no começo de 2013 foi
            fundada também a loja online, que conta com mais de 2 mil produtos
            cadastrados e que podem ser enviados para todo o país.
          </p>
        </div>
      </div>
    </Container>
  );
}
