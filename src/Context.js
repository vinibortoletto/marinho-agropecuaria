import React, { useState, useEffect } from "react";
// import Client from "./Contentful";
import { getProducts, saveProducts, getStoredProducts } from "./Storage";

const ProductContext = React.createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  // Get products from Contentful if LocalStorage is empty
  useEffect(() => {
    products.length === 0 && getProducts(setProducts);
  }, []);

  // Save products to LocalStorage
  useEffect(() => {
    saveProducts(products);
  }, [products]);

  function findSelectedProduct(id) {
    const product = products.find((product) => product.sys.id === id);
    setSelectedProduct(product);
  }

  return (
    <ProductContext.Provider
      value={{ products, selectedProduct, findSelectedProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
