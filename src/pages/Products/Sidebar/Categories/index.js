import React from "react";

// Components
import Checkbox from "../../../../components/Form/Checkbox/index";

export default function Categories() {
  return (
    <div className="categories">
      <h1>Categorias</h1>

      <ul>
        <li>
          <Checkbox label="Rações" />
        </li>
        <li>
          <Checkbox label="Brinquedos" />
        </li>
        <li>
          <Checkbox label="Remédios" />
        </li>
        <li>
          <Checkbox label="Casa e Construção" />
        </li>
        <li>
          <Checkbox label="Jardim" />
        </li>
      </ul>
    </div>
  );
}
