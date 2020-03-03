import React, { useState, useEffect } from "react";

// Banners
import DogsBanner from "../../../images/banners/dogs.jpg";
import HouseBanner from "../../../images/banners/house.jpg";
import GardenBanner from "../../../images/banners/garden.jpg";

// Styles
import { ButtonPill } from "../../../components/Buttons/styles";
import { Styles as Section } from "./styles";
import Banner from "../../../components/Banner/index";

export default function Hero() {
  return (
    <Section className="section_margin">
      <Banner overlay img={DogsBanner} alt="cachorros" />

      <div className="text">
        <h1>Cuidamos de quem te faz feliz</h1>
        <h2>Alimentos, brinquedos e veterinários para seu pet</h2>
      </div>

      <ButtonPill>Explorar</ButtonPill>
    </Section>
  );
}
