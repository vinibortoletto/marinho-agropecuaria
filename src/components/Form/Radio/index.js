import React from "react";

import { Container } from "./styles";

export default function Radio({ label, name, value, checked }) {
  return (
    <Container>
      <label>
        {label}
        <input type="radio" checked={checked} value={value} name={name} />
        <span className="checkmark"></span>
      </label>
    </Container>
  );
}
