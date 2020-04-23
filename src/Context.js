import React, { useState, useEffect } from "react";
import Client from "./Contentful";

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  function getProducts() {
    Client.getEntries("products")
      .then((entry) => {
        let data = entry.items;
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products: products }}>
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
