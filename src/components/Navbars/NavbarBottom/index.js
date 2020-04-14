import React from "react";
import { Navbar } from "./styles";

export default function NavbarBottom() {
  return (
    <Navbar className="navbar_bottom">
      <ul>
        <li>
          <i className="fas fa-search"></i>
          <p>Pesquisar</p>
        </li>

        <li>
          <i className="far fa-list-alt"></i>
          <p>Produtos</p>
        </li>

        <li>
          <i className="fas fa-shopping-cart"></i>
          <p>Carrinho</p>
        </li>
      </ul>
    </Navbar>
  );
}
