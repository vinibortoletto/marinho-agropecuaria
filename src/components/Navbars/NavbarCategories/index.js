import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearch } from '../../../contexts/Search';

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

// Styles
import { Navbar } from './styles';

export default function NavbarCategories() {
  const location = useLocation();
  const { searchContent } = useSearch();

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

  // Shrink navbar categories on scroll
  useEffect(() => {
    const navbarCategories = document.querySelector('.navbar_categories');

    window.onscroll = () => {
      window.pageYOffset > 20
        ? navbarCategories.classList.add('shrink')
        : navbarCategories.classList.remove('shrink');
    };
  }, []);

  // Toggle category icons opacity
  useEffect(() => {
    let currentWidth = window.innerWidth;

    if (currentWidth > 900) {
      const currentPage = location.pathname.toString();
      const icons = document.querySelectorAll('.category_container');

      if (currentPage.includes('contato') || currentPage.includes('produtos')) {
        categories.forEach((category) => {
          if (currentPage.includes(category.path)) {
            icons.forEach((icon) => {
              icon.style.opacity = '0.5';
              currentPage.includes(icon.id) && (icon.style.opacity = '1');
            });
          }
        });
      } else {
        icons.forEach((icon) => {
          icon.style.opacity = '1';
        });
      }
    }

    function getWidth() {
      currentWidth = window.innerWidth;
    }

    window.addEventListener('resize', getWidth);
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, [searchContent]);

  return (
    <Navbar className="navbar_categories">
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            to={
              category.path === 'contato'
                ? '/contato'
                : `/produtos/${category.path}`
            }
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
