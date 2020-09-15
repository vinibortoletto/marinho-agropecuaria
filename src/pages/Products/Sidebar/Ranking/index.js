import React from 'react'

// Components
import Checkbox from '../../../../components/Form/Checkbox'

export default function Prices({ type }) {
  return (
    <div className='ranking'>
      <h1>Avaliações</h1>

      <ul>
        <li>
          <Checkbox stars type={type} />
        </li>
        <li>
          <Checkbox stars type={type} />
        </li>
        <li>
          <Checkbox stars type={type} />
        </li>
        <li>
          <Checkbox stars type={type} />
        </li>
        <li>
          <Checkbox stars type={type} />
        </li>
      </ul>
    </div>
  )
}
