import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../../../Context';

// Components
import ProductCard from '../../../components/ProductCard/index';

// Styles
import { Container } from './styles';
import { ButtonSquare } from '../../../components/Buttons/styles';

export default function ProductList() {
  const location = useLocation();
  const context = useContext(ProductContext);
  const { sortedProducts, handleSortProducts } = context;

  const [itemsToShow, setItemsToShow] = useState([{}, {}, {}, {}, {}, {}]);

  function handleItemsToShow() {
    const moreProductsBtn = document.getElementById('moreProducts_btn');

    const newItemsToShow = [...itemsToShow, {}, {}, {}];
    setItemsToShow(newItemsToShow);

    if (location.pathname !== '/produtos') {
      let filteredProducts;

      filteredProducts = sortedProducts.filter((product) =>
        product.fields.tags.includes(context.currentPage),
      );

      newItemsToShow.length >= filteredProducts.length && (moreProductsBtn.style.display = 'none');
    } else if (location.pathname === '/produtos') {
      newItemsToShow.length >= sortedProducts.length && (moreProductsBtn.style.display = 'none');
    }
  }

  function showBackupCards() {
    return itemsToShow.map((item, index) => <ProductCard key={index} />);
  }

  function showProductCards() {
    if (location.pathname !== '/produtos') {
      const filteredProducts = sortedProducts.filter((product) =>
        product.fields.tags.includes(context.currentPage),
      );

      return filteredProducts.map(
        (product, index) =>
          index < itemsToShow.length && (
            <Link
              onClick={() => {
                context.findSelectedProduct(product.sys.id);
              }}
              key={product.sys.id}
              to="/detalhes-do-produto"
            >
              <ProductCard
                loaded
                className="product_card"
                img={product.fields.img.fields.file.url}
                title={product.fields.title}
                price={product.fields.price}
              />
            </Link>
          ),
      );
    }
    return sortedProducts.map(
      (product, index) =>
        index < itemsToShow.length && (
          <Link
            onClick={() => {
              context.findSelectedProduct(product.sys.id);
            }}
            key={product.sys.id}
            to="/detalhes-do-produto"
          >
            <ProductCard
              loaded
              className="product_card"
              img={product.fields.img.fields.file.url}
              title={product.fields.title}
              price={product.fields.price}
            />
          </Link>
        ),
    );
  }

  useEffect(() => {
    let page = location.pathname.split('produtos/').pop();

    page === 'caes' && (page = 'cães');
    page === 'repteis' && (page = 'répteis');

    context.getCurrentPage(page);
  }, [location]);

  useEffect(() => {
    // const sortOptions = document.querySelector('.sort_options');
    // handleSortProducts(sortOptions, sortedProducts);
    // console.log('called');
    // TODO: products should be sorted on mount
  }, []);

  return (
    <Container>
      <div className="products_list">
        {context.sortedProducts.length < 1 ? showBackupCards() : showProductCards()}
      </div>

      <div className="button_container">
        <ButtonSquare
          mini
          transparent
          onClick={() => {
            handleItemsToShow();
          }}
          id="moreProducts_btn"
        >
          ver mais produtos
        </ButtonSquare>
      </div>
    </Container>
  );
}
