import React from "react";

// Components
import Checkbox from "../../../../components/Form/Checkbox/index";

export default function Prices() {
  return (
    <div className="ranking">
      <h1>Avaliações</h1>

      <ul>
        <li>
          <Checkbox stars />
        </li>
        <li>
          <Checkbox stars />
        </li>
        <li>
          <Checkbox stars />
        </li>
        <li>
          <Checkbox stars />
        </li>
        <li>
          <Checkbox stars />
        </li>
      </ul>
    </div>
  );
}
