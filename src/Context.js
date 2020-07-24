import React, { useState, useEffect } from "react";

// import Client from "./Contentful";
import { getProducts, saveProducts, getStoredProducts } from "./Storage";

const ProductContext = React.createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState();

  // Get products from Contentful if LocalStorage is empty
  useEffect(() => {
    products.length === 0 && getProducts(setProducts);
  }, [products]);

  // Save products to LocalStorage
  useEffect(() => {
    saveProducts(products);
  }, [products]);

  function getCurrentPage(id) {
    let icons = document.querySelectorAll(".category_container");

    icons.forEach((icon) => {
      icon.style.opacity = "0.5";
      icon.id === id && (icon.style.opacity = "1");
    });

    setCurrentPage(id);
  }

  function findSelectedProduct(id) {
    const product = products.find((product) => product.sys.id === id);
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
