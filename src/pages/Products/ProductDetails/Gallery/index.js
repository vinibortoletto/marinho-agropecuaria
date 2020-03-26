import React, { useEffect } from "react";

// Images
import product from "../../../../images/products/product_sample.png";

import { Container } from "./styles";

export default function Gallery() {
  function handleDots() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        dots.forEach(dot => {
          dot.classList.contains("selected") &&
            dot.classList.remove("selected");
        });

        dot.classList.add("selected");
      });
    });
  }

  useEffect(() => {
    handleDots();
  }, []);

  return (
    <Container>
      <img src={product} alt="produto" />

      <div className="dots">
        <div className="dot selected"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Container>
  );
}
