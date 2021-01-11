import React, { useContext } from 'react';
import { ProductContext } from '../../../../helpers/Context';
import { IconSphere } from '../../../IconSphere/styles';

export default function Buttons() {
  const context = useContext(ProductContext);
  const { cart } = context;

  return (
    <div className="btn_container">
      <button type="button" className="btn_user">
        <IconSphere>
          <i className="fas fa-user" />
        </IconSphere>
        <p>
          Olá, faça seu <a href="#">login</a> ou <a href="#">cadastre-se</a>
        </p>
      </button>

      <button type="button" className="btn_favorites">
        <IconSphere>
          <i className="fas fa-heart" />
          <span className="counter">0</span>
        </IconSphere>
      </button>

      <button type="button" className="btn_cart">
        <IconSphere>
          <i className="fas fa-shopping-cart" />
          <span className="counter">{cart.length}</span>
        </IconSphere>
      </button>
    </div>
  );
}
