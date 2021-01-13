import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Backup() {
  return (
    <Container>
      <h2>Nenhum produto favorito encontrado</h2>

      <Link to="/produtos">
        <button type="button">Click aqui para ver mais produtos</button>
      </Link>
    </Container>
  );
}
