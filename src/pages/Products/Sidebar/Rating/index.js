import React from 'react';

// Components
import Checkbox from '../../../../components/Form/Checkbox';

export default function Rating() {
  return (
    <div className="rating">
      <h1>Avaliações</h1>

      <ul>
        <li>
          <Checkbox stars name="rating" value="1" />
        </li>
        <li>
          <Checkbox stars name="rating" value="2" />
        </li>
        <li>
          <Checkbox stars name="rating" value="3" />
        </li>
        <li>
          <Checkbox stars name="rating" value="4" />
        </li>
        <li>
          <Checkbox stars name="rating" value="5" />
        </li>
      </ul>
    </div>
  );
}
