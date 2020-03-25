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
          <Checkbox label="Enlatados" />
        </li>
        <li>
          <Checkbox label="Petiscos" />
        </li>
        <li>
          <Checkbox label="Brinquedos" />
        </li>
        <li>
          <Checkbox label="Remédios" />
        </li>
      </ul>
    </div>
  );
}
