import React from "react";

import { Container } from "./styles";

export default function DividingLine({ bgColor, margin }) {
  return (
    <Container bgColor={bgColor} margin={margin}>
      <hr />
    </Container>
  );
}
