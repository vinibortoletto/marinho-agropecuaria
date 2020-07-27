import React, { useState, useEffect } from "react";
import {
  getProducts,
  saveProducts,
  getStoredProducts,
  getStoredSelectedProduct,
  saveSelectedProduct,
} from "./Storage";

const ProductContext = React.createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  // Get selectedProduct from localStorage OR from Contentful
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

  function getCurrentPage(id) {
    let icons = document.querySelectorAll(".category_container");

    icons.forEach((icon) => {
      icon.style.opacity = "0.5";
      icon.id === id && (icon.style.opacity = "1");
    });

    setCurrentPage(id);
  }

  function findSelectedProduct(id) {
    const product = [];
    product.push(products.find((product) => product.sys.id === id));

    setSelectedProduct(product);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        findSelectedProduct,
        getCurrentPage,
        currentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
