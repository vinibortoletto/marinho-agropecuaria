import React from 'react';
import DividingLine from '../../../components/DividingLine';
import { Container } from './styles';

export default function OrderDetails({ selectedOrder }) {
  let order = selectedOrder;
  const localSelectedOrder = JSON.parse(localStorage.getItem('selectedOrder'));
  localSelectedOrder && (order = localSelectedOrder);

  return (
    <Container>
      <div className="description">
        O pedido <span>#{order.id}</span> foi realizado em
        <span> {order.fullDate}</span> e atualmente está
        <span> aguardando pagamento</span>.
      </div>

      <div>
        {order.products.map((product, index) => {
          const { title, price, amount } = product.fields;
          const { url } = product.fields.img.fields.file;

          return (
            <div key={index} className="product_info">
              <div className="wrapper">
                <div>
                  <img src={url} alt="produto" />
                </div>

                <div className="product_content">
                  <h1 className="title">{title}</h1>
                  <h2 className="price">Valor unit.: R${price}</h2>
                  <h3 className="quantity">Qtd.: {amount}</h3>
                </div>
              </div>

              <DividingLine bgColor="var(--d_gold);" />

              <div className="subtotal">
                <p>Subtotal do item: R${(amount * price).toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="price_summary">
        <p>Subtotal do pedido: R${order.subtotal}</p>
        <p>Frete: R${order.tax}</p>
        <p className="total">Total: R${order.total}</p>
      </div>
    </Container>
  );
}
