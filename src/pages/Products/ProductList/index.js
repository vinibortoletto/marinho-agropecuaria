import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Context
import { useSearch } from '../../../contexts/Search';
import { ProductContext } from '../../../contexts/Product';

// Components
import ProductCard from '../../../components/ProductCard/index';
import { ButtonSquare } from '../../../components/Buttons/styles';
import FavoriteBackup from '../ProductDetails/Details/Favorite/Backup';

// Styles
import { Container } from './styles';

export default function ProductList() {
  const location = useLocation();
  const context = useContext(ProductContext);
  const { sortedProducts, favoriteProducts } = context;
  const { cleanText, searchContent } = useSearch();
  const [numOfProductsToDisplay, setNumOfProductsToDisplay] = useState(3);

  // Get current width
  useEffect(() => {
    window.innerWidth >= 818
      ? setNumOfProductsToDisplay(6)
      : setNumOfProductsToDisplay(3);
  }, [location]);

  function showBackupCards() {
    const backupCards = [];

    for (let i = 0; i < numOfProductsToDisplay; i++) {
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
      location.pathname !== '/produtos/' &&
      !location.pathname.includes('favoritos')
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
    } else if (location.pathname.includes('favoritos')) {
      products = favoriteProducts;
    } else {
      products = sortedProducts;
    }

    // Hide/Show "more products button"
    const moreProductsBtn = document.getElementById('moreProducts_btn');

    if (moreProductsBtn !== null) {
      if (numOfProductsToDisplay >= products.length) {
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
        index < numOfProductsToDisplay && (
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

  function handleDisplay() {
    if (location.pathname.includes('favoritos')) {
      return favoriteProducts.length > 0 ? (
        showProductCards()
      ) : (
        <FavoriteBackup />
      );
    }

    return sortedProducts.length > 0 ? showProductCards() : showBackupCards();
  }

  return (
    <Container>
      <div className="products_list">{handleDisplay()}</div>

      {!location.pathname.includes('favoritos') && (
        <div className="button_container">
          <ButtonSquare
            mini
            transparent
            onClick={() => {
              setNumOfProductsToDisplay(numOfProductsToDisplay + 3);
            }}
            id="moreProducts_btn"
          >
            ver mais produtos
          </ButtonSquare>
        </div>
      )}
    </Container>
  );
}
