import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { ButtonPill } from '../../../components/Buttons/styles';
import { Styles as Section } from './styles';
import Banner from '../../../components/Banner';

export default function Hero({ img, title, subtitle, alt, path }) {
  return (
    <Section className="hero">
      <Banner overlay img={img} alt={alt} />

      <div className="content">
        <div className="text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>

      <hr />

      <Link to={`produtos/${path}`}>
        <ButtonPill>Explorar</ButtonPill>
      </Link>
    </Section>
  );
}
