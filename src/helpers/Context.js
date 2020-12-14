import React, { useState, useEffect } from 'react';
import { saveProducts, getLocalProducts } from './Storage';

import { addProductToCart } from './Context/Cart';

const ProductContext = React.createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const [cart, setCart] = useState([]);

  function findSelectedProduct(id) {
    const newSelectedProduct = [];
    newSelectedProduct.push(products.find((product) => product.sys.id === id));

    setSelectedProduct(newSelectedProduct);
    localStorage.setItem('selectedProduct', JSON.stringify(newSelectedProduct));
  }

  function getCurrentPage(page) {
    setCurrentPage(page);
  }

  function handleSortProducts(option, oldProducts) {
    const newProducts = oldProducts || sortedProducts;

    // Ascending
    if (option === 'Menor preço') {
      newProducts.sort((a, b) => parseFloat(a.fields.price) - parseFloat(b.fields.price));
    }
    // Descending
    else if (option === 'Maior preço') {
      newProducts.sort((a, b) => parseFloat(b.fields.price) - parseFloat(a.fields.price));
    }
    // By rating
    else {
      newProducts.sort((a, b) => b.fields.rating - a.fields.rating);
    }

    setSortedProducts([...newProducts]);
  }

  function getSortOption(setDefaultOption) {
    setDefaultOption(JSON.parse(localStorage.getItem('sortOption')));
  }
  function saveSortOption(defaultOption) {
    localStorage.setItem('sortOption', JSON.stringify(defaultOption));
  }

  // add cart empty to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([]));
  }, []);

  // Get products, sortedProducts, selectedProducts
  useEffect(() => {
    getLocalProducts(setProducts, setSortedProducts);

    const localSelectedProducts = JSON.parse(localStorage.getItem('selectedProduct'));

    if (localSelectedProducts && localSelectedProducts.length > 0) {
      setSelectedProduct(localSelectedProducts);
    }
  }, []);

  // Save products/sortedProducts to localStorage
  useEffect(() => {
    saveProducts(products, sortedProducts);
  }, [products, sortedProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        saveProducts,

        selectedProduct,
        findSelectedProduct,

        cart,
        setCart,
        addProductToCart,

        currentPage,
        getCurrentPage,

        sortedProducts,
        setSortedProducts,
        handleSortProducts,

        getSortOption,
        saveSortOption,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
