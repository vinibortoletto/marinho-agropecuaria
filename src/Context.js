import React, { useState, useEffect } from 'react'
import {
  getProducts,
  saveProducts,
  getStoredProducts,
  getStoredSelectedProduct,
  saveSelectedProduct,
} from './helpers/Storage'

const ProductContext = React.createContext(null)

function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])

  const [selectedProduct, setSelectedProduct] = useState([])
  const [currentPage, setCurrentPage] = useState()

  // Get products from localStorage OR from Contentful
  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products'))

    if (localProducts !== null && localProducts.length > 0) {
      getStoredProducts(setProducts, setSortedProducts)
    } else {
      getProducts(setProducts, setSortedProducts)
    }
  }, [])

  // Get selectedProduct from localStorage
  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('selectedProduct')

    if (checkLocalStorage !== null && checkLocalStorage.length > 0) {
      getStoredSelectedProduct(setSelectedProduct)
    }
  }, [])

  // Save products/selectedProduct to localStorage
  useEffect(() => {
    saveProducts(products, sortedProducts)
    saveSelectedProduct(selectedProduct)
  }, [products, sortedProducts, selectedProduct])

  function getCurrentPage(page) {
    setCurrentPage(page)
  }

  function findSelectedProduct(id) {
    const product = []
    product.push(products.find(product => product.sys.id === id))

    setSelectedProduct(product)
  }

  function handleSortProducts(option, oldProducts) {
    const newProducts = oldProducts || sortedProducts

    // Ascending
    if (option === 'Menor preço') {
      newProducts.sort(
        (a, b) => parseFloat(a.fields.price) - parseFloat(b.fields.price)
      )
    }
    // Descending
    else if (option === 'Maior preço') {
      newProducts.sort(
        (a, b) => parseFloat(b.fields.price) - parseFloat(a.fields.price)
      )
    }
    // By rating
    else {
      newProducts.sort((a, b) => b.fields.rating - a.fields.rating)
    }

    setSortedProducts([...newProducts])
  }

  function getSortOption(setDefaultOption) {
    setDefaultOption(JSON.parse(localStorage.getItem('sortOption')))
  }

  function saveSortOption(defaultOption) {
    localStorage.setItem('sortOption', JSON.stringify(defaultOption))
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        saveProducts,

        selectedProduct,
        findSelectedProduct,

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
  )
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer, ProductContext }
