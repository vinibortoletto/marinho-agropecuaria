import React, { useState, useEffect } from 'react';

// Images
import logo from '../../images/logos/my_logo/main.svg';
import manBannerSm from '../../images/banners/man-sm.jpg';
import manBannerMd from '../../images/banners/man-md.jpg';
import manBannerBg from '../../images/banners/man-bg.jpg';

// Components
import { Title } from '../../components/Title/styles';
import Companies from './Companies/index';

// Styles
import { Container, Banner } from './styles';

export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [manBanner, setManBanner] = useState(manBannerSm);

  useEffect(() => {
    function getWidth() {
      setWindowWidth(window.innerWidth);
    }

    function setBanner() {
      if (windowWidth <= 500) {
        setManBanner(manBannerSm);
      } else if (windowWidth <= 1000 && windowWidth > 500) {
        setManBanner(manBannerMd);
      } else {
        setManBanner(manBannerBg);
      }
    }

    window.addEventListener('resize', getWidth);
    setBanner();

    return () => {
      window.removeEventListener('resize', getWidth);
      setBanner();
    };
  }, [windowWidth]);

  return (
    <Container>
      <Title>Quem somos</Title>

      <section className="content">
        <section>
          <Banner img={manBanner}>
            <div className="bg_img" />
          </Banner>

          <div className="text">
            <p>
              A <span>Marinho Agropecuária</span> foi fundada em Piracicaba,
              interior de São Paulo, em 1987.
            </p>

            <p>
              Uma singela loja de bairro voltada a suprir as necessidades dos
              pequenos criadores e donos de animais de médio e grande porte. Com
              o passar do tempo a loja se tornou uma das maiores agropecuárias
              da região, tendo hoje em estoque mais de 20 mil produtos variados,
              sendo alguns deles, peças e suprimentos para piscina, alimentos
              para animais, ferramentas para jardinagem, dentre outros. Com a
              pretensão de atender também o público de fora da cidade, no começo
              de 2013 foi fundada também a loja online, que conta com mais de 2
              mil produtos cadastrados e que podem ser enviados para todo o
              país.
            </p>
          </div>
        </section>

        <section>
          <Companies />
        </section>

        <section className="logo">
          <img src={logo} alt="marinho logo" />
        </section>
      </section>
    </Container>
  );
}
