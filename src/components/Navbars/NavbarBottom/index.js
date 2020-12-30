import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context';
import { Navbar } from './styles';

export default function NavbarBottom() {
  const [cartLength, setCartLength] = useState(0);
  const context = useContext(ProductContext);
  const { cart } = context;

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <Navbar className="navbar_bottom">
      <ul>
        <li>
          <button type="button">
            <i className="fas fa-search" />
            <p>Pesquisar</p>
          </button>
        </li>

        <li>
          <button type="button">
            <i className="far fa-list-alt" />
            <p>Produtos</p>
          </button>
        </li>

        <li>
          <Link to="carrinho">
            <button type="button">
              <div>
                <i className="fas fa-shopping-cart" />
                <div className="counter">
                  <span>{cartLength}</span>
                </div>
              </div>
              <p>Carrinho</p>
            </button>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
