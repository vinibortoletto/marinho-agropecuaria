import React, { useState, useEffect } from "react";
import {
  getProducts,
  saveProducts,
  getStoredProducts,
  getStoredSelectedProduct,
  saveSelectedProduct,
} from "./helpers/Storage";

const ProductContext = React.createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  // Get products from localStorage OR from Contentful
  useEffect(() => {
    const checkLocalStorage = localStorage.getItem("products");

    if (checkLocalStorage !== null && checkLocalStorage.length >= 0) {
      getStoredProducts(setProducts);
    } else {
      getProducts(setProducts);
    }
  }, []);

  // Get selectedProduct from localStorage
  useEffect(() => {
    const checkLocalStorage = localStorage.getItem("selectedProduct");

    if (checkLocalStorage !== null && checkLocalStorage.length > 0) {
      getStoredSelectedProduct(setSelectedProduct);
    }
  }, []);

  // Save products/selectedProduct to localStorage
  useEffect(() => {
    saveProducts(products);
    saveSelectedProduct(selectedProduct);
  }, [products, selectedProduct]);

  function getCurrentPage(page) {
    setCurrentPage(page);
  }

  function findSelectedProduct(id) {
    const product = [];
    product.push(products.find((product) => product.sys.id === id));

    setSelectedProduct(product);
  }

  function handleSortProducts(option) {
    let newProducts = products;

    // Ascending
    if (option === "Menor preço") {
      newProducts.sort(
        (a, b) => parseFloat(a.fields.price) - parseFloat(b.fields.price)
      );
    }
    // Descending
    else if (option === "Maior preço") {
      newProducts.sort(
        (a, b) => parseFloat(a.fields.price) + parseFloat(b.fields.price)
      );
    }
    // By rating
    else {
      newProducts.sort((a, b) => b.fields.rating - a.fields.rating);
    }

    setProducts([...newProducts]);
  }

  function getSortOption(setDefaultOption) {
    setDefaultOption(JSON.parse(localStorage.getItem("sortOption")));
  }

  function saveSortOption(defaultOption) {
    localStorage.setItem("sortOption", JSON.stringify(defaultOption));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        findSelectedProduct,
        getCurrentPage,
        currentPage,
        setProducts,
        saveProducts,
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
