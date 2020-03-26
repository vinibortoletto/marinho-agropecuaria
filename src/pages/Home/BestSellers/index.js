import React from "react";
import { Link } from "react-router-dom";

// Components
import ProductCard from "../../../components/ProductCard/index";

// Flickity slider
import Slider from "../../../components/Slider/index";

// Styles
import { Styles as Section } from "./styles";
import { Title } from "../../../components/Title/styles";
import { ButtonSquare } from "../../../components/Buttons/styles";

export default function BestSellers() {
  return (
    <Section className="section_margin">
      <Title>Os mais vendidos</Title>

      {/* <div className="slider_wrapper">
        <Slider
          options={{
            autoPlay: true,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            freeScroll: true
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div> */}

      {/* <div className="product_list_wrapper">
    
      </div> */}

      <div className="content">
        <div className="product_list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="btn_container">
          <ButtonSquare mini transparent>
            <Link to="/produtos">Ver mais produtos</Link>
          </ButtonSquare>
        </div>
      </div>
    </Section>
  );
}
