import React from 'react'

// Components
import Checkbox from '../../../../components/Form/Checkbox/index'

export default function Categories({ type }) {
  return (
    <div className='categories'>
      <h1>Categorias</h1>

      <ul>
        <li>
          <Checkbox label='Rações' type={type} />
        </li>
        <li>
          <Checkbox label='Brinquedos' type={type} />
        </li>
        <li>
          <Checkbox label='Remédios' type={type} />
        </li>
        <li>
          <Checkbox label='Casa e Construção' type={type} />
        </li>
        <li>
          <Checkbox label='Jardim' type={type} />
        </li>
      </ul>
    </div>
  )
}
