import React from 'react';

import { Container } from './styles';

export default function Radio({ label, name, value, checked, handleChange }) {
  return (
    <Container>
      <label>
        {label}
        <input
          type="radio"
          checked={checked}
          value={value}
          name={name}
          onChange={handleChange && handleChange}
          className="radio"
        />
        <span className="checkmark"></span>
      </label>
    </Container>
  );
}
