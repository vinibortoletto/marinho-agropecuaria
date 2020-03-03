import React from "react";
import Hero from "./Hero";
import BestSellers from "./BestSellers";
import Contact from "../Contact";
import About from "../About";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Contact />
      <About />
    </>
  );
}
