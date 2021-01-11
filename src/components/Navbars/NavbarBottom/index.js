import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context';
import Categories from './Categories';
import Search from './Search';
import { Navbar } from './styles';

export default function NavbarBottom() {
  const location = useLocation();

  const context = useContext(ProductContext);
  const { cart } = context;

  function toggleShowCategories() {
    const categoriesElmt = document.querySelector('.navbar_categories_mobile');
    const searchElmt = document.querySelector('.navbar_search_mobile');

    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (categoriesElmt.classList.contains('show')) {
      categoriesElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    } else {
      categoriesElmt.classList.add('show');
      boxShadow.classList.add('show');
    }

    searchElmt.classList.contains('show') &&
      searchElmt.classList.remove('show');
  }

  function toggleShowSearch() {
    // Show "search" elmt
    const searchElmt = document.querySelector('.navbar_search_mobile');
    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (searchElmt.classList.contains('show')) {
      searchElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    } else {
      searchElmt.classList.add('show');
      boxShadow.classList.add('show');
    }

    // Set focus to input
    const searchInputElmt = searchElmt.querySelector('input');
    searchInputElmt.focus();

    // Hide "categories" elmt if open
    const categoriesElmt = document.querySelector('.navbar_categories_mobile');
    categoriesElmt.classList.contains('show') &&
      categoriesElmt.classList.remove('show');
  }

  // Close product categories (if open) when router changes
  useEffect(() => {
    const categoriesElmt = document.querySelector('.navbar_categories_mobile');

    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (categoriesElmt.classList.contains('show')) {
      categoriesElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    }
  }, [location]);

  return (
    <Navbar className="navbar_bottom">
      <div className="box_shadow" />
      <ul>
        <li>
          <button onClick={toggleShowSearch} type="button" id="search_btn">
            <i className="fas fa-search" />
            <p>Pesquisar</p>
          </button>

          <Search toggleShowSearch={toggleShowSearch} />
        </li>

        <li>
          <button
            onClick={toggleShowCategories}
            type="button"
            id="categories_btn"
          >
            <i className="far fa-list-alt" />
            <p>Produtos</p>
          </button>

          <Categories />
        </li>

        <li>
          <Link to="/carrinho">
            <button type="button" id="cart_btn">
              <div className="cart_icon_container">
                <i className="cart_icon fas fa-shopping-cart" />
                <div className="counter">
                  <span>{cart.length}</span>
                </div>
                <p>Carrinho</p>
              </div>
            </button>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
