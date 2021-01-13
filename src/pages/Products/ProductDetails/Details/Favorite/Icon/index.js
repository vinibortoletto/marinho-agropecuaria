import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../../../../../helpers/Context/Product';

// Components
import { IconSphere } from '../../../../../../components/IconSphere/styles';

// Styles
import { Container } from './styles';

export default function FavoriteIcon({ id }) {
  const context = useContext(ProductContext);
  const { favoriteProducts, setFavoriteProducts, selectedProduct } = context;
  const [favIcon, setFavIcon] = useState(false);

  function handleClick() {
    let newFavoriteProducts = favoriteProducts;
    let hasProduct = false;

    function addProduct() {
      newFavoriteProducts.push(...selectedProduct);
      setFavIcon(true);
    }

    function removeProduct() {
      hasProduct = false;
      newFavoriteProducts = newFavoriteProducts.filter(
        (product) => product.sys.id !== id,
      );
      setFavIcon(false);
    }

    // Check if there is favorites stores
    if (newFavoriteProducts && newFavoriteProducts.length > 0) {
      // Check if selectedProduct is already favorited
      newFavoriteProducts.forEach((product) => {
        product.sys.id === id && (hasProduct = true);
      });

      hasProduct ? removeProduct() : addProduct();
    } else {
      addProduct();
    }

    // Add to localStorage & setState
    localStorage.setItem(
      'favoriteProducts',
      JSON.stringify(newFavoriteProducts),
    );
    setFavoriteProducts([...newFavoriteProducts]);
  }

  // Add favIcon if selectedProduct exists
  useEffect(() => {
    const hasProduct = favoriteProducts.find(
      (product) => product.sys.id === id,
    );

    hasProduct ? setFavIcon(true) : setFavIcon(false);
  }, [selectedProduct]);

  return (
    <Container onClick={handleClick}>
      <IconSphere>
        {favIcon ? (
          <i className="fas fa-heart" />
        ) : (
          <i className="far fa-heart" />
        )}
      </IconSphere>
    </Container>
  );
}
