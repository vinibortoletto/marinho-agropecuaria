import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPill } from '../../../components/Buttons/styles';
import { useProduct } from '../../../contexts/Product';
import { Container } from './styles';

export default function Orders({ setSelectedOrder }) {
  const { orders } = useProduct();

  function saveSelectedOrder(order) {
    setSelectedOrder(order);
    localStorage.setItem('selectedOrder', JSON.stringify(order));
  }

  return (
    <Container>
      {orders.map((order, index) => (
        <div key={index} className="card">
          <h1>Nº do pedido: #{order.id}</h1>
          <h2>Data da compra: {order.simpleDate}</h2>
          <h3>Status: aguardando pagamento</h3>
          <h4>Total: {order.total}</h4>

          <Link to="/minha-conta/pedidos/detalhes-do-pedido">
            <ButtonPill onClick={() => saveSelectedOrder(order)} mini>
              Mais informações
            </ButtonPill>
          </Link>
        </div>
      ))}

      <div className="card empty">
        <div>
          <h1>Quer fazer um novo pedido?</h1>
          <Link to="/produtos">
            <ButtonPill transparent mini>
              Veja nossos produtos
            </ButtonPill>
          </Link>
        </div>
      </div>
    </Container>
  );
}
