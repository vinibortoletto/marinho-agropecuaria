import React from 'react'

// Components
import Checkbox from '../../../../components/Form/Checkbox/index'

export default function Prices({ type }) {
  return (
    <div className='prices'>
      <h1>Preços</h1>

      <ul>
        <li>
          <Checkbox label='Até R$15' type={type} />
          <span>(34)</span>
        </li>
        <li>
          <Checkbox label='Até R$25' type={type} />
          <span>(34)</span>
        </li>
        <li>
          <Checkbox label='Até R$50' type={type} />
          <span>(34)</span>
        </li>
        <li>
          <Checkbox label='Até R$100' type={type} />
          <span>(15)</span>
        </li>
        <li>
          <Checkbox label='Até R$200' type={type} />
          <span>(7)</span>
        </li>
      </ul>
    </div>
  )
}
