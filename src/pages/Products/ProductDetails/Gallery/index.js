import React, { useEffect } from "react";

// Images
import product from "../../../../images/products/product_sample.png";

// Styles
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
        <button className="dot selected"></button>
        <button className="dot"></button>
        <button className="dot"></button>
      </div>
    </Container>
  );
}
