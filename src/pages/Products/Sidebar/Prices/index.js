import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../../../helpers/Context/Product';

// Components
import Radio from '../../../../components/Form/Radio/index';

// Styles
import { Container } from './styles';

export default function Prices() {
  const context = useContext(ProductContext);
  const { products } = context;
  const location = useLocation();

  function handleProductAmount(price) {
    const url = location.pathname;
    let newProducts;

    if (url !== '/produtos') {
      let productSection = url.split('/produtos/').pop();

      if (productSection === 'caes') {
        productSection = 'cães';
      } else if (productSection === 'repteis') {
        productSection = 'répteis';
      }

      newProducts = products.filter((product) =>
        product.fields.tags.includes(productSection),
      );
      newProducts = newProducts.filter(
        (product) => product.fields.price <= price,
      );
    } else {
      newProducts = products;
      newProducts = newProducts.filter(
        (product) => product.fields.price <= price,
      );
    }

    return newProducts.length;
  }

  return (
    <Container className="prices">
      <h1>Preços</h1>
      <ul>
        <li>
          <Radio name="price" value="15" label="Até R$15" />
          <span>({handleProductAmount(15)})</span>
        </li>
        <li>
          <Radio name="price" value="25" label="Até R$25" />
          <span>({handleProductAmount(25)})</span>
        </li>
        <li>
          <Radio name="price" value="50" label="Até R$50" />
          <span>({handleProductAmount(50)})</span>
        </li>
        <li>
          <Radio name="price" value="100" label="Até R$100" />
          <span>({handleProductAmount(100)})</span>
        </li>
        <li>
          <Radio name="price" value="200" label="Até R$200" />
          <span>({handleProductAmount(200)})</span>
        </li>
      </ul>
    </Container>
  );
}
