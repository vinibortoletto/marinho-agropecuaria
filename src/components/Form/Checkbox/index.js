import React from 'react';

// Styles
import { Container } from './styles';

export default function Checkbox({ name, value, label }) {
  return (
    <Container>
      <div>
        <label>
          <input name={name} value={value} type="checkbox" className="checkbox" />
          <span className="checkmark" />
          {label}
        </label>
      </div>
    </Container>
  );
}
