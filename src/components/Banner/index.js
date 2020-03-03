import React from "react";

import { Container } from "./styles";

export default function Banner(props) {
  const { img, alt } = props;

  return (
    <Container>
      {props.overlay && <div className="overlay"></div>}
      <img src={img} alt={alt} />
    </Container>
  );
}
