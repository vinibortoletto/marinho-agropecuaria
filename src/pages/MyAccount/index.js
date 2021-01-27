import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Title } from '../../components/Title/styles';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import Profile from './Profile';
import { Container } from './styles';

function MyAccount() {
  const location = useLocation();
  const [category, setCategory] = useState('');
  const [selectedOrder, setSelectedOrder] = useState();

  function handleCategory(e) {
    const btn = e.target.tagName === 'I' ? e.target.parentNode : e.target;
    setCategory(btn.classList.value);
  }

  function handleDisplay() {
    if (location.pathname.includes('detalhes-do-pedido')) {
      return (
        <OrderDetails
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      );
    }

    if (location.pathname.includes('pedido')) {
      return <Orders setSelectedOrder={setSelectedOrder} />;
    }

    if (location.pathname.includes('cadastro')) {
      return <Profile />;
    }
  }

  useEffect(() => {
    location.pathname.includes('pedidos') && setCategory('orders');
    location.pathname.includes('cadastro') && setCategory('profile');
  }, []);

  return (
    <Container>
      <Title>Minha Conta</Title>

      <section>
        <div className="categories">
          <Link to="/minha-conta/pedidos">
            <button
              onClick={handleCategory}
              type="button"
              className="orders"
              id={category === 'orders' ? 'selected' : ''}
            >
              <i className="fas fa-box-open" />
              Pedidos
            </button>
          </Link>

          <Link to="/minha-conta/cadastro">
            <button
              onClick={handleCategory}
              className="profile"
              type="button"
              id={category === 'profile' ? 'selected' : ''}
            >
              <i className="fas fa-users-cog" />
              Cadastro
            </button>
          </Link>
        </div>
        {handleDisplay()}
      </section>
    </Container>
  );
}

export default MyAccount;
