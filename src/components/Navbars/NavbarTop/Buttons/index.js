import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../../helpers/Context/Product';
import { IconSphere } from '../../../IconSphere/styles';

export default function Buttons() {
  const context = useContext(ProductContext);
  const { cart, favoriteProducts } = context;
  const [favCounter, setFavCounter] = useState(0);

  useEffect(() => {
    setFavCounter(favoriteProducts.length);
  }, [favoriteProducts]);

  return (
    <div className="btn_container">
      <button type="button" className="btn_user">
        <IconSphere>
          <i className="fas fa-user" />
        </IconSphere>
        <p>
          Olá, faça seu <a href="/">login</a> ou <a href="/">cadastre-se</a>
        </p>
      </button>

      <Link to="/produtos/favoritos">
        <button type="button" className="btn_favorites">
          <IconSphere>
            <i className="fas fa-heart" />
            <span className="counter">{favCounter}</span>
          </IconSphere>
        </button>
      </Link>

      <Link to="/carrinho">
        <button type="button" className="btn_cart">
          <IconSphere>
            <i className="fas fa-shopping-cart" />
            <span className="counter">{cart.length}</span>
          </IconSphere>
        </button>
      </Link>
    </div>
  );
}
