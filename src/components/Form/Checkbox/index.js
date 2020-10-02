import React from 'react';

// Components
import Stars from '../../Stars/index';

// Styles
import { Container } from './styles';

export default function Checkbox({ name, value, label, stars }) {
  return (
    <Container>
      <div>
        <label>
          <input name={name} value={value} type="checkbox" className="checkbox" />
          <span className="checkmark" />
          {stars ? <Stars /> : label}
        </label>
      </div>
    </Container>
  );
}
