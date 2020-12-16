import React, { useState, useEffect } from 'react';

// Components
import ProductItemMobile from './Mobile';
import ProductItemDesktop from './Desktop';

// Styles
import { Container } from './styles';

export default function ProductItem({ title, price, img }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleWidth() {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <Container>
      {/* {windowWidth < 750 ? (
        <ProductItemMobile title={title} price={price} img={img} />
      ) : (
        <ProductItemDesktop title={title} price={price} img={img} />
      )} */}

      <ProductItemMobile title={title} price={price} img={img} />
    </Container>
  );
}
