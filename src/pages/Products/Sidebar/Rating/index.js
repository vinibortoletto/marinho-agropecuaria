import React from 'react';

// Components
import Radio from '../../../../components/Form/Radio';

// Styles
import { Container } from './styles';

export default function Rating() {
  return (
    <Container className="rating">
      <h1>Avaliações</h1>

      <ul>
        <li>
          <Radio stars={1} name="rating" value="1" />
        </li>
        <li>
          <Radio stars={2} name="rating" value="2" />
        </li>
        <li>
          <Radio stars={3} name="rating" value="3" />
        </li>
        <li>
          <Radio stars={4} name="rating" value="4" />
        </li>
        <li>
          <Radio stars={5} name="rating" value="5" />
        </li>
      </ul>
    </Container>
  );
}
