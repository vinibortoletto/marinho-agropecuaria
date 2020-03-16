import React from "react";
import { IconSphere } from "../../../../IconSphere/styles";

export default function Buttons() {
  return (
    <div className="btn_container">
      <button className="btn_user">
        <IconSphere>
          <i className="fas fa-user"></i>
        </IconSphere>
        <p>
          Olá, faça seu <a href="#">login</a> ou <a href="#">cadastre-se</a>
        </p>
      </button>

      <button className="btn_favorites">
        <IconSphere>
          <i className="fas fa-heart"></i>
          <span className="counter">0</span>
        </IconSphere>
      </button>

      <button className="btn_cart">
        <IconSphere>
          <i className="fas fa-shopping-cart"></i>
          <span className="counter">0</span>
        </IconSphere>
      </button>
    </div>
  );
}
