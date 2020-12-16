import React from 'react';

// Components
import DividingLine from '../../../../components/DividingLine';
import { ButtonSquare } from '../../../../components/Buttons/styles';
import Select from '../../../../components/Form/Select';

// Styles
import { Container } from './styles';

export default function Desktop({ title, price, img }) {
  return (
    <Container>
      <div className="head">
        <span>Produto</span>
        <span>Valor unit.</span>
        <span>Qtd.</span>
        <span>Subtotal</span>
      </div>

      <DividingLine bgColor="var(--d_green_trans);" />

      <div className="body">
        <div>
          <img src={img} alt="produto" />
          <span className="title">{title}</span>
        </div>

        <div>
          <span className="price">R${price}</span>
        </div>

        <div>
          <Select mini cart options={['1', '2', '3', '4', '5']} />

          <button type="button" className="remove_item">
            <i className="fas fa-times" />
            Remover item
          </button>
        </div>

        <div>
          <span className="subtotal">R$50,00</span>
        </div>
      </div>
    </Container>
  );
}
