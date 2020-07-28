import React, { useEffect } from "react";

// Images
import product from "../../../../images/products/product_sample.png";

// Styles
import { Container } from "./styles";

export default function Gallery({ img }) {
  function handleDots() {
    const dots = document.querySelectorAll(".dot");
    const img = document.querySelector(".productDetails_img-container img");

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        dots.forEach((dot) => {
          dot.classList.contains("selected") &&
            dot.classList.remove("selected");

          img.classList.add("animation");
          setTimeout(() => {
            img.classList.remove("animation");
          }, 300);
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
      <div className="productDetails_img-container">
        <img src={img} alt="produto" />
      </div>

      <div className="dots">
        <button className="dot selected"></button>
        <button className="dot"></button>
        <button className="dot"></button>
      </div>
    </Container>
  );
}
