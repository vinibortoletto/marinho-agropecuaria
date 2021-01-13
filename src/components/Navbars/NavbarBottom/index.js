import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context/Product';
import { useSearch } from '../../../helpers/Context/Search';
import Categories from './Categories';
import Search from './Search';
import { Navbar } from './styles';

// Images
import dogIcon from '../../../images/categories/top/dog.svg';
import catIcon from '../../../images/categories/top/cat.svg';
import fishIcon from '../../../images/categories/top/fish.svg';
import reptileIcon from '../../../images/categories/top/reptile.svg';
import birdIcon from '../../../images/categories/top/bird.svg';
import rodentIcon from '../../../images/categories/top/rodent.svg';
import houseIcon from '../../../images/categories/top/house.svg';
import gardenIcon from '../../../images/categories/top/garden.svg';
import infoIcon from '../../../images/categories/top/info.svg';

export default function NavbarBottom() {
  const { toggleShowSearch } = useSearch();
  const location = useLocation();

  const context = useContext(ProductContext);
  const { cart } = context;

  const [productIcon, setProductIcon] = useState(null);

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

  // Close product categories (if open) when router changes
  useEffect(() => {
    const categoriesElmt = document.querySelector('.navbar_categories_mobile');

    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (categoriesElmt.classList.contains('show')) {
      categoriesElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    }
  }, [location]);

  // Change product icon
  useEffect(() => {
    if (location.pathname.includes('caes')) {
      setProductIcon(<img src={dogIcon} alt="ícone de categoria cães" />);
    } else if (location.pathname.includes('gatos')) {
      setProductIcon(<img src={catIcon} alt="ícone de categoria gatos" />);
    } else if (location.pathname.includes('peixes')) {
      setProductIcon(<img src={fishIcon} alt="ícone de categoria peixes" />);
    } else if (location.pathname.includes('repteis')) {
      setProductIcon(
        <img src={reptileIcon} alt="ícone de categoria repteis" />,
      );
    } else if (location.pathname.includes('aves')) {
      setProductIcon(<img src={birdIcon} alt="ícone de categoria aves" />);
    } else if (location.pathname.includes('roedores')) {
      setProductIcon(
        <img src={rodentIcon} alt="ícone de categoria roedores" />,
      );
    } else if (location.pathname.includes('casa')) {
      setProductIcon(<img src={houseIcon} alt="ícone de categoria casa" />);
    } else if (location.pathname.includes('jardim')) {
      setProductIcon(<img src={gardenIcon} alt="ícone de categoria jardim" />);
    } else if (location.pathname.includes('contato')) {
      setProductIcon(<img src={infoIcon} alt="ícone de categoria contato" />);
    } else {
      setProductIcon(null);
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

          <Search />
        </li>

        <li>
          <button
            onClick={toggleShowCategories}
            type="button"
            id="categories_btn"
          >
            {productIcon || <i className="far fa-list-alt" />}

            <p>Categorias</p>
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
