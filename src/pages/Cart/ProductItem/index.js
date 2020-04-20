import React, { useState, useEffect } from "react";

// Images
import product from "../../../images/products/product_sample.png";

// Components
import ProductItemMobile from "./Mobile";
import ProductItemDesktop from "./Desktop";
// import DividingLine from "../../../components/DividingLine";

// Styles
import { Container } from "./styles";

export default function ProductItem() {
  const [windowWidth, setWindowWidth] = useState(0);

  function handleWidth() {
    setWindowWidth(window.outerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.outerWidth);
    });
  }

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <Container>
      {windowWidth < 750 ? (
        <ProductItemMobile product={product} />
      ) : (
        <ProductItemDesktop product={product} />
      )}
    </Container>
  );
}
