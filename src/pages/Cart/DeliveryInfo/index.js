import React, { useState, useEffect } from 'react';

// Components
import DividingLine from '../../../components/DividingLine';
import DeliveryOptions from './DeliveryOptions';
import CepNumber from './CepNumber';

// Styles
import { Container } from './styles';

export default function DeliveryInfo() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function getWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <DeliveryOptions />

        {windowWidth < 750 && <DividingLine margin="var(--m_lg)" />}

        <CepNumber />
      </div>

      {windowWidth < 1000 && <DividingLine margin="var(--m_lg)" />}
    </Container>
  );
}
