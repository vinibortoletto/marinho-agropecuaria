import React, { useState, useEffect } from 'react';

// Components
import Stars from '../Stars/index';

// Styles
import { Container } from './styles';

export default function ProductCard({ img, title, price, loaded }) {
  const [numOfInstallments, setNumOfInstallments] = useState(0);

  // Get numer of installments
  useEffect(() => {
    if (price <= 50) {
      setNumOfInstallments(2);
    } else if (price <= 100) {
      setNumOfInstallments(4);
    } else if (price <= 200) {
      setNumOfInstallments(6);
    }
  }, []);

  return (
    <Container>
      {!loaded ? (
        <div className="backup_card">
          <div className="img" />
          <div className="title" />
          <div className="stars" />
          <div className="price" />
        </div>
      ) : (
        <div className="product_card">
          <div className="img_container">
            <img src={img} alt="produto" />
          </div>

          <h1>{title}</h1>

          <Stars />

          <div className="price">
            <h2>R${price}</h2>
            <h3>até {numOfInstallments}x de R$3,16 no cartão</h3>
          </div>
        </div>
      )}
    </Container>
  );
}
