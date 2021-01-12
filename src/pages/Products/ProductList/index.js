import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonSquare } from '../../../components/Buttons/styles';
import { useSearch } from '../../../helpers/Context/SearchContext';
// Components
import ProductCard from '../../../components/ProductCard/index';
import { ProductContext } from '../../../helpers/Context';
// Styles
import { Container } from './styles';

export default function ProductList() {
  const location = useLocation();
  const context = useContext(ProductContext);
  const { sortedProducts } = context;
  const { cleanText, searchContent } = useSearch();

  const [itemsToShow, setItemsToShow] = useState(3);

  // Get current width
  useEffect(() => {
    window.innerWidth >= 818 && setItemsToShow(6);
  }, []);

  function showBackupCards() {
    const backupCards = [];

    for (let i = 0; i < itemsToShow; i++) {
      backupCards.push(<ProductCard key={i} />);
    }

    return [...backupCards];
  }

  function showProductCards() {
    let products = [];
    let newProducts = [];

    // Check if location is 'products'
    if (
      location.pathname.includes('/produtos/') &&
      location.pathname !== '/produtos/'
    ) {
      searchContent.map((word) => {
        const filteredProductsByTags = sortedProducts.filter((product) =>
          cleanText(product.fields.tags).includes(word),
        );

        const filteredProductsByTitle = sortedProducts.filter((product) =>
          cleanText(product.fields.title).includes(word),
        );

        const filteredProducts = [
          ...filteredProductsByTags,
          ...filteredProductsByTitle,
        ];

        // Remove duplicated products
        newProducts = filteredProducts.filter((item, pos, self) => {
          return self.indexOf(item) === pos;
        });

        return newProducts;
      });

      products = newProducts;
    } else {
      products = sortedProducts;
    }

    // Hide/Show "more products button"
    const moreProductsBtn = document.getElementById('moreProducts_btn');

    if (moreProductsBtn !== null) {
      if (itemsToShow > products.length) {
        moreProductsBtn.style.opacity = '0';
        moreProductsBtn.style.pointerEvents = 'none';
      } else {
        moreProductsBtn.style.opacity = '1';
        moreProductsBtn.style.pointerEvents = 'all';
      }
    }

    // Display products
    return products.map(
      (product, index) =>
        index < itemsToShow && (
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
            setItemsToShow(itemsToShow + 3);
          }}
          id="moreProducts_btn"
        >
          ver mais produtos
        </ButtonSquare>
      </div>
    </Container>
  );
}
