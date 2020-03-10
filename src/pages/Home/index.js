import React from "react";
import Hero from "./Hero";
import BestSellers from "./BestSellers";
import Contact from "../Contact";
import About from "../About";
import Slider from "../../components/Slider/index";

// Images
import dogsBanner from "../../images/banners/dogs.jpg";
import houseBanner from "../../images/banners/house.jpg";
import gardenBanner from "../../images/banners/garden.jpg";

import { Container } from "./styles";

export default function Home() {
  const heroData = [
    {
      img: dogsBanner,
      title: "Cuidamos de quem te faz feliz",
      subtitle: "Alimentos, brinquedos e veterinários para seu pet"
    },
    {
      img: houseBanner,
      title: "Atendemos as necessidades da sua casa",
      subtitle: "Materias de construção e ferramentas para seu lar"
    },
    {
      img: gardenBanner,
      title: "Do campo para a sua casa",
      subtitle: "Mudas, sementes e ornamentos para seu jardim"
    }
  ];

  return (
    <>
      <Container className="section_margin">
        <Slider
          options={{
            autoPlay: 5000,
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
