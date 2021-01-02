import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import dogIcon from '../../../../images/categories/dog.svg';
import catIcon from '../../../../images/categories/cat.svg';
import fishIcon from '../../../../images/categories/fish.svg';
import reptileIcon from '../../../../images/categories/reptile.svg';
import birdIcon from '../../../../images/categories/bird.svg';
import rodentIcon from '../../../../images/categories/rodent.svg';
import houseIcon from '../../../../images/categories/house.svg';
import gardenIcon from '../../../../images/categories/garden.svg';
import infoIcon from '../../../../images/categories/info.svg';

export default function Categories() {
  const categoriesData = [
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

  return (
    <Container className="navbar_categories_mobile">
      {categoriesData.map((category, index) => {
        return (
          <Link
            key={index}
            to={category.path === 'contato' ? '/contato' : `/produtos/${category.path}`}
          >
            <div id={category.path} className="category_container">
              <img className="img" src={category.img} alt={category.alt} />
              <p>{category.name === 'atendimento' ? 'atend.' : category.name}</p>
            </div>
          </Link>
        );
      })}
    </Container>
  );
}
