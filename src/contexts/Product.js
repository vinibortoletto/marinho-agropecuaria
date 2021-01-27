import React, { useState, useEffect, useContext } from 'react';
import { saveProducts, getLocalProducts } from '../helpers/Storage';

const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const localFavoriteProducts = JSON.parse(
      localStorage.getItem('favoriteProducts'),
    );

    localFavoriteProducts && setFavoriteProducts(localFavoriteProducts);
  }, []);

  function findSelectedProduct(id) {
    const newSelectedProduct = [];
    newSelectedProduct.push(products.find((product) => product.sys.id === id));
    setSelectedProduct(newSelectedProduct);
    localStorage.setItem('selectedProduct', JSON.stringify(newSelectedProduct));
  }

  function handleSortProducts(option, oldProducts) {
    const newProducts = oldProducts || sortedProducts;

    // Ascending
    if (option === 'menor preço') {
      newProducts.sort(
        (a, b) => parseFloat(a.fields.price) - parseFloat(b.fields.price),
      );
    }
    // Descending
    else if (option === 'maior preço') {
      newProducts.sort(
        (a, b) => parseFloat(b.fields.price) - parseFloat(a.fields.price),
      );
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

  // update cart in localStorage and state
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));

    if (localCart === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    } else if (localCart.length > 0) {
      setCart(localCart);
    }
  }, []);

  // Get products, sortedProducts, selectedProducts
  useEffect(() => {
    getLocalProducts(setProducts, setSortedProducts);
    const localSelectedProduct = JSON.parse(
      localStorage.getItem('selectedProduct'),
    );
    if (localSelectedProduct && localSelectedProduct.length > 0) {
      setSelectedProduct(localSelectedProduct);
    }

    const localOrders = JSON.parse(localStorage.getItem('orders'));
    if (localOrders && localOrders.length > 0) {
      setOrders(localOrders);
    } else {
      localStorage.setItem('orders', JSON.stringify([]));
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

        favoriteProducts,
        setFavoriteProducts,

        cart,
        setCart,
        subtotal,
        setSubtotal,
        tax,
        setTax,
        deliveryOption,
        setDeliveryOption,
        orders,
        setOrders,

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

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer, ProductContext };
