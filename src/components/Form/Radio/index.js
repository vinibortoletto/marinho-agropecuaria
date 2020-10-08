import React from 'react';

import { Container } from './styles';
import Stars from '../../Stars/index';

export default function Radio({ label, name, value, checked, handleChange, stars }) {
  return (
    <Container>
      <label>
        {stars ? <Stars stars={stars} /> : label}

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
