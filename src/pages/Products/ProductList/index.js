import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonSquare } from '../../../components/Buttons/styles';
// Components
import ProductCard from '../../../components/ProductCard/index';
import { ProductContext } from '../../../helpers/Context';
// Styles
import { Container } from './styles';

export default function ProductList() {
  const location = useLocation();
  const context = useContext(ProductContext);
  const {
    sortedProducts,
    searchContent,
    setSearchContent,
    currentPage,
  } = context;

  const [itemsToShow, setItemsToShow] = useState([{}, {}, {}, {}, {}, {}]);

  function handleItemsToShow() {
    const moreProductsBtn = document.getElementById('moreProducts_btn');

    const newItemsToShow = [...itemsToShow, {}, {}, {}];
    setItemsToShow(newItemsToShow);

    if (location.pathname !== '/produtos') {
      const filteredProducts = sortedProducts.filter((product) =>
        product.fields.tags.includes(context.currentPage),
      );

      newItemsToShow.length >= filteredProducts.length &&
        (moreProductsBtn.style.display = 'none');
    } else if (location.pathname === '/produtos') {
      newItemsToShow.length >= sortedProducts.length &&
        (moreProductsBtn.style.display = 'none');
    }
  }

  function showBackupCards() {
    return itemsToShow.map((item, index) => <ProductCard key={index} />);
  }

  useEffect(() => {
    // Turn string into array
    let newSearchContent;
    currentPage.includes(' ') && (newSearchContent = currentPage.split(' '));
    setSearchContent(newSearchContent);
  }, [currentPage]);

  function showProductCards() {
    let products;

    if (
      location.pathname !== '/produtos' &&
      location.pathname !== '/produtos/'
    ) {
      // Filter product base on categories
      if (currentPage !== undefined && !currentPage.includes(' ')) {
        const newProducts = sortedProducts.filter((product) =>
          product.fields.tags.includes(currentPage),
        );

        products = newProducts;
      } else {
        let newProducts = [];

        if (searchContent !== undefined && searchContent.length > 0) {
          searchContent.map((word) => {
            const filteredProductsByTags = sortedProducts.filter((product) =>
              product.fields.tags.includes(word),
            );

            const filteredProductsByTitle = sortedProducts.filter((product) =>
              product.fields.title.includes(word),
            );

            const filteredProducts = [
              ...filteredProductsByTags,
              ...filteredProductsByTitle,
            ];

            newProducts = filteredProducts.filter((item, pos, self) => {
              return self.indexOf(item) === pos;
            });

            return newProducts;
          });
        }

        products = newProducts;
      }
    } else {
      products = sortedProducts;
    }

    return products.map(
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

  return (
    <Container>
      <div className="products_list">
        {sortedProducts.length === 0 ? showBackupCards() : showProductCards()}
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
