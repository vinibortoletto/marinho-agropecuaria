import React from "react";

// Components
import Stars from "../../Stars/index";

// Styles
import { Container } from "./styles";

export default function Checkbox({ label, htmlFor, stars }) {
  return (
    <Container>
      <label>
        <input type="checkbox" />
        <span className="checkmark"></span>
        {stars ? <Stars /> : label}
      </label>
    </Container>
  );
}
