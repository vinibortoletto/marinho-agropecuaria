import React from "react";

// Components
import Checkbox from "../../../../components/Form/Checkbox/index";

export default function Prices() {
  return (
    <div className="prices">
      <h1>Preços</h1>

      <ul>
        <li>
          <Checkbox label="Até R$50" />
          <span>(34)</span>
        </li>
        <li>
          <Checkbox label="Até R$100" />
          <span>(15)</span>
        </li>
        <li>
          <Checkbox label="Até R$200" />
          <span>(7)</span>
        </li>
        <li>
          <Checkbox label="Até R$500" />
          <span>(2)</span>
        </li>
        <li>
          <Checkbox label="+ de R$500" />
          <span>(0)</span>
        </li>
      </ul>
    </div>
  );
}
