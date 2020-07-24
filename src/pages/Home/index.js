import React, { useState, useEffect } from "react";

// Images
import dogsBannerSm from "../../images/banners/dogs-sm.jpg";
import dogsBannerMd from "../../images/banners/dogs-md.jpg";
import dogsBannerBg from "../../images/banners/dogs-bg.jpg";

import houseBannerSm from "../../images/banners/house-sm.jpg";
import houseBannerMd from "../../images/banners/house-md.jpg";
import houseBannerBg from "../../images/banners/house-bg.jpg";

import gardenBannerSm from "../../images/banners/garden-sm.jpg";
import gardenBannerMd from "../../images/banners/garden-md.jpg";
import gardenBannerBg from "../../images/banners/garden-bg.jpg";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [dogsBanner, setDogsBanner] = useState(dogsBannerSm);
  const [houseBanner, setHouseBanner] = useState(houseBannerSm);
  const [gardenBanner, setGardenBanner] = useState(gardenBannerSm);

  const heroData = [
    {
      img: dogsBanner,
      title: "Cuidamos de quem te faz feliz",
      subtitle: "Alimentos, brinquedos e veterinários para seu pet",
      alt: "cachorros",
      path: "caes",
      id: "dogs",
    },
    {
      img: houseBanner,
      title: "Atendemos as necessidades da sua casa",
      subtitle: "Materias de construção e ferramentas para seu lar",
      alt: "casa e construção",
      path: "casa",
      id: "house",
    },
    {
      img: gardenBanner,
      title: "Do campo para a sua casa",
      subtitle: "Mudas, sementes e ornamentos para seu jardim",
      alt: "jardinagem",
      path: "jardim",
      id: "garden",
    },
  ];

  function getWidth() {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }

  function setBanners() {
    if (windowWidth <= 500) {
      setDogsBanner(dogsBannerSm);
      setHouseBanner(houseBannerSm);
      setGardenBanner(gardenBannerSm);
    } else if (windowWidth <= 1000 && windowWidth > 500) {
      setDogsBanner(dogsBannerMd);
      setHouseBanner(houseBannerMd);
      setGardenBanner(gardenBannerMd);
    } else {
      setDogsBanner(dogsBannerBg);
      setHouseBanner(houseBannerBg);
      setGardenBanner(gardenBannerBg);
    }
  }

  useEffect(() => {
    getWidth();
    setBanners();
  }, [windowWidth]);

  return (
    <>
      <Container className="hero" className="section_margin">
        <Slider
          options={{
            autoPlay: 5000,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            fade: true,
          }}
        >
          {heroData.map((hero, index) => (
            <Hero
              key={index}
              img={hero.img}
              title={hero.title}
              subtitle={hero.subtitle}
              alt={hero.alt}
              path={hero.path}
              id={hero.id}
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
