import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../contexts/Auth';
import { useProduct } from '../../../../contexts/Product';
import { ButtonPill } from '../../../Buttons/styles';
import { IconSphere } from '../../../IconSphere/styles';

export default function Buttons() {
  const { currentUser, loginGoogle, logout } = useAuth();
  const { cart, favoriteProducts } = useProduct();
  const [favCounter, setFavCounter] = useState(0);

  useEffect(() => {
    setFavCounter(favoriteProducts.length);
  }, [favoriteProducts]);

  function handleHiddenContent() {
    let content;
    if (currentUser) {
      content = (
        <>
          <Link to="/minha-conta/pedidos">
            <i className="fas fa-user" />
            Minha conta
          </Link>

          <Link onClick={logout} to="/">
            <i className="fas fa-sign-out-alt" />
            Sair
          </Link>
        </>
      );
    } else {
      content = (
        <>
          <Link to="/login">
            <ButtonPill mini id="login_email" type="button">
              <i className="fas fa-at" />
              Entar com email
            </ButtonPill>
          </Link>

          <ButtonPill
            onClick={loginGoogle}
            mini
            id="login_google"
            type="button"
          >
            <i className="fab fa-google" />
            Entar com Google
          </ButtonPill>

          <div className="line" />

          <p>Não possui um conta?</p>
          <Link to="/cadastro">
            <ButtonPill transparent mini id="signup" type="button">
              Cadastre-se
            </ButtonPill>
          </Link>
        </>
      );
    }

    return content;
  }

  return (
    <div className="btn_container">
      <div className="user_container">
        <Link to={currentUser ? '/' : '/login'}>
          <button type="button" className="btn_user">
            <IconSphere>
              <i className="fas fa-user" />
            </IconSphere>
            <p>
              Olá,
              <span>
                {currentUser
                  ? currentUser.displayName
                  : 'faça login ou cadastre-se'}{' '}
              </span>
            </p>
          </button>
        </Link>

        <div
          className={currentUser ? 'hidden_content logged' : 'hidden_content'}
        >
          <div className="line strong" />
          {handleHiddenContent()}
        </div>
      </div>

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
