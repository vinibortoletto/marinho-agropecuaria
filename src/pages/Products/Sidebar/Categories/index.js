import React from 'react';

// Components
import Checkbox from '../../../../components/Form/Checkbox/index';

export default function Categories() {
  return (
    <div className="categories">
      <h1>Categorias</h1>

      <ul>
        <li>
          <Checkbox name="categories" value="rações" label="Rações" />
        </li>
        <li>
          <Checkbox name="categories" value="brinquedos" label="Brinquedos" />
        </li>
        <li>
          <Checkbox name="categories" value="remédios" label="Remédios" />
        </li>
        <li>
          <Checkbox name="categories" value="casa e construção" label="Casa e Construção" />
        </li>
        <li>
          <Checkbox name="categories" value="jardim" label="Jardim" />
        </li>
      </ul>
    </div>
  );
}
