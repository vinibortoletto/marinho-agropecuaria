import React from 'react';

// Components
import DividingLine from '../../../components/DividingLine';
import { ButtonBullet } from '../../../components/Buttons/styles';

// Styles
import { Container } from './styles';

export default function OrderSummary() {
  return (
    <Container>
      <div className="order_summary">
        <div className="title">Resumo do pedido</div>

        <div>
          <div className="product_amount">
            <span className="title">2 produtos</span>
            <span className="price">R$100</span>
          </div>

          <div className="delivery_tax">
            <span className="title">Frete</span>
            <span className="price">R$6,00</span>
          </div>

          <DividingLine />

          <div className="order_total">
            <div>
              <span className="title">Total:</span>
              <span className="price">R$ 106,00</span>
            </div>
            <span className="payment_method">em até 4x sem juros</span>
          </div>
        </div>
      </div>

      <div>
        <ButtonBullet>Finalizar pedido</ButtonBullet>
      </div>
    </Container>
  );
}
