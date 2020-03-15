import React from "react";

// Styles
import { Container } from "./styles";

// Company Images
import pagseguroImg from "../../../images/logos/companies/pagseguro.png";
import comodoImg from "../../../images/logos/companies/comodo.png";
import correiosImg from "../../../images/logos/companies/correios.png";
import abcommImg from "../../../images/logos/companies/abcomm.png";
import ebitImg from "../../../images/logos/companies/ebit.png";

export default function Companies() {
  const companyImages = [
    {
      url: pagseguroImg,
      alt: "pagseguro logo"
    },
    {
      url: comodoImg,
      alt: "comodo logo"
    },
    {
      url: correiosImg,
      alt: "correios logo"
    },
    {
      url: ebitImg,
      alt: "ebit logo"
    },
    {
      url: abcommImg,
      alt: "abcomm logo"
    }
  ];

  return (
    <Container>
      {companyImages.map((img, index) => {
        return (
          <div key={index}>
            <img src={img.url} alt={img.alt} />
          </div>
        );
      })}
    </Container>
  );
}
