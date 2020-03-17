import React from "react";

// Images
import dogsBanner from "../../images/banners/dogs.jpg";
import houseBanner from "../../images/banners/house.jpg";
import gardenBanner from "../../images/banners/garden.jpg";

// Components
import Slider from "../../components/Slider/index";

// Pages
import Hero from "./Hero";
import BestSellers from "./BestSellers";
import Contact from "../Contact";
import About from "../About";

// Styles
import { Container } from "./styles";
import Navbars from "../../components/Navbars/index";

export default function Home() {
  const heroData = [
    {
      img: dogsBanner,
      title: "Cuidamos de quem te faz feliz",
      subtitle: "Alimentos, brinquedos e veterinários para seu pet",
      alt: "cachorros"
    },
    {
      img: houseBanner,
      title: "Atendemos as necessidades da sua casa",
      subtitle: "Materias de construção e ferramentas para seu lar",
      alt: "casa e construção"
    },
    {
      img: gardenBanner,
      title: "Do campo para a sua casa",
      subtitle: "Mudas, sementes e ornamentos para seu jardim",
      alt: "jardinagem"
    }
  ];

  return (
    <>
      <Container className="hero" className="section_margin">
        <Slider
          options={{
            autoPlay: 5000,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            fade: true
          }}
        >
          {heroData.map((hero, index) => (
            <Hero
              key={index}
              img={hero.img}
              title={hero.title}
              subtitle={hero.subtitle}
              alt={hero.alt}
            />
          ))}
        </Slider>
      </Container>

      <BestSellers />
      <Contact />
      <About />
    </>
  );
}
