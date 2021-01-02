import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context';
import Categories from './Categories';
import { Navbar } from './styles';

export default function NavbarBottom() {
  const location = useLocation();

  const [cartLength, setCartLength] = useState(0);
  const context = useContext(ProductContext);
  const { cart } = context;

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  function toggleShowProductCategories() {
    const navbarCategoriesMobileElmt = document.querySelector('.navbar_categories_mobile');
    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (navbarCategoriesMobileElmt.classList.contains('show')) {
      navbarCategoriesMobileElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    } else {
      navbarCategoriesMobileElmt.classList.add('show');
      boxShadow.classList.add('show');
    }
  }

  // Close product categories (if open) when router changes
  useEffect(() => {
    const navbarCategoriesMobileElmt = document.querySelector('.navbar_categories_mobile');
    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (navbarCategoriesMobileElmt.classList.contains('show')) {
      navbarCategoriesMobileElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    }
  }, [location]);

  return (
    <Navbar className="navbar_bottom">
      <div className="box_shadow" />
      <ul>
        <li>
          <button type="button">
            <i className="fas fa-search" />
            <p>Pesquisar</p>
          </button>
        </li>

        <li>
          <button onClick={toggleShowProductCategories} type="button">
            <i className="far fa-list-alt" />
            <p>Produtos</p>
          </button>

          <Categories />
        </li>

        <li>
          <Link to="/carrinho">
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
