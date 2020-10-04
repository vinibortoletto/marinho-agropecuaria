import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../Context';

// Images
import dogIcon from '../../../images/categories/dog.svg';
import catIcon from '../../../images/categories/cat.svg';
import fishIcon from '../../../images/categories/fish.svg';
import reptileIcon from '../../../images/categories/reptile.svg';
import birdIcon from '../../../images/categories/bird.svg';
import rodentIcon from '../../../images/categories/rodent.svg';
import houseIcon from '../../../images/categories/house.svg';
import gardenIcon from '../../../images/categories/garden.svg';
import infoIcon from '../../../images/categories/info.svg';

// Styles
import { Navbar } from './styles';

export default function NavbarCategories() {
  const context = useContext(ProductContext);

  const categories = [
    {
      img: dogIcon,
      alt: 'categoria cães',
      name: 'cães',
      path: 'caes',
    },
    {
      img: catIcon,
      alt: 'categoria gatos',
      name: 'gatos',
      path: 'gatos',
    },
    {
      img: fishIcon,
      alt: 'categoria peixes',
      name: 'peixes',
      path: 'peixes',
    },
    {
      img: reptileIcon,
      alt: 'categoria répteis',
      name: 'répteis',
      path: 'repteis',
    },
    {
      img: birdIcon,
      alt: 'categoria aves',
      name: 'aves',
      path: 'aves',
    },
    {
      img: rodentIcon,
      alt: 'categoria roedores',
      name: 'roedores',
      path: 'roedores',
    },
    {
      img: houseIcon,
      alt: 'categoria casa',
      name: 'casa',
      path: 'casa',
    },
    {
      img: gardenIcon,
      alt: 'categoria jardim',
      name: 'jardim',
      path: 'jardim',
    },
    {
      img: infoIcon,
      alt: 'categoria atendimento',
      name: 'atendimento',
      path: 'contato',
    },
  ];

  useEffect(() => {
    const navbarCategories = document.querySelector('.navbar_categories');

    window.onscroll = () => {
      window.pageYOffset > 20
        ? navbarCategories.classList.add('shrink')
        : navbarCategories.classList.remove('shrink');
    };
  }, []);

  function showActiveCategory(id) {
    let icons = document.querySelectorAll('.category_container');

    icons.forEach((icon) => {
      icon.style.opacity = '0.5';
      icon.id === id && (icon.style.opacity = '1');
    });
  }

  return (
    <Navbar className="navbar_categories">
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            to={category.path === 'contato' ? '/contato' : `/produtos/${category.path}`}
            onClick={() => {
              context.getCurrentPage(category.name);
              showActiveCategory(category.path);
            }}
          >
            <div id={category.path} className="category_container">
              <img className="img" src={category.img} alt={category.alt} />
              <p>{category.name}</p>
            </div>
          </Link>
        );
      })}
    </Navbar>
  );
}
