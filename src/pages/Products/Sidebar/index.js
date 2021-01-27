import React, { useEffect } from 'react';
import { useProduct } from '../../../contexts/Product';
import Categories from './Categories/index';
import ClearFiltersBtn from './ClearFiltersBtn/index';
// Components
import CloseSideBarBtn from './CloseSideBarBtn/index';
import Prices from './Prices/index';
import Rating from './Rating/index';
import { Container } from './styles';

export default function Sidebar({ handleCloseSidebar }) {
  const { setSortedProducts, handleSortProducts } = useProduct();

  function handleChecking(elmt) {
    // Update localStorage
    const localStorageData = JSON.parse(localStorage.getItem(elmt.name));
    let newLocalStorageData = localStorageData;

    elmt.name === 'categories'
      ? newLocalStorageData.push(elmt.value)
      : (newLocalStorageData = [elmt.value]);

    localStorage.setItem(elmt.name, JSON.stringify(newLocalStorageData));

    // Update products list
    const sortOption = JSON.parse(localStorage.getItem('sortOption'));
    const oldProducts = JSON.parse(localStorage.getItem('products'));
    const currentProducts = JSON.parse(localStorage.getItem('sortedProducts'));
    const newProducts = [];
    let filteredProducts;

    const localCategories = JSON.parse(localStorage.getItem('categories'));
    const localPrice = JSON.parse(localStorage.getItem('price'));
    const localRating = JSON.parse(localStorage.getItem('rating'));

    newLocalStorageData.forEach((dataValue) => {
      if (elmt.name === 'categories') {
        filteredProducts =
          localPrice.length > 0 || localRating.length > 0
            ? currentProducts.filter((product) =>
                product.fields.tags.includes(dataValue),
              )
            : oldProducts.filter((product) =>
                product.fields.tags.includes(dataValue),
              );

        newProducts.push(...filteredProducts);
      } else if (elmt.name === 'price') {
        filteredProducts =
          localCategories.length > 0 || localRating.length > 0
            ? currentProducts.filter(
                (product) => product.fields.price <= dataValue,
              )
            : oldProducts.filter(
                (product) => product.fields.price <= dataValue,
              );

        newProducts.push(...filteredProducts);
      } else if (elmt.name === 'rating') {
        filteredProducts =
          localCategories.length > 0 || localPrice.length > 0
            ? currentProducts.filter(
                (product) => product.fields.rating <= dataValue,
              )
            : oldProducts.filter(
                (product) => product.fields.rating <= dataValue,
              );

        newProducts.push(...filteredProducts);
      }
    });

    handleSortProducts(sortOption, newProducts);
    setSortedProducts(newProducts);
  }

  function handleUnchecking(elmt) {
    //  Since price/rating are radios, there's no need to uncheck them

    if (elmt.name === 'categories') {
      // Update categories in localStorage
      const localCategories = JSON.parse(localStorage.getItem('categories'));
      const localPrice = JSON.parse(localStorage.getItem('price'));
      const localRating = JSON.parse(localStorage.getItem('rating'));

      const newLocalCategories = localCategories.filter(
        (category) => category !== elmt.value,
      );
      localStorage.setItem('categories', JSON.stringify(newLocalCategories));

      // Update products list
      const sortOption = JSON.parse(localStorage.getItem('sortOption'));
      const oldProducts = JSON.parse(localStorage.getItem('products'));
      const currentProducts = JSON.parse(
        localStorage.getItem('sortedProducts'),
      );
      const newProducts = [];
      let filteredProducts;

      if (newLocalCategories.length > 0) {
        newLocalCategories.map((category) => {
          filteredProducts =
            localPrice.length > 0 || localRating.length > 0
              ? currentProducts.filter((product) =>
                  product.fields.tags.includes(category),
                )
              : oldProducts.filter((product) =>
                  product.fields.tags.includes(category),
                );

          return newProducts.push(...filteredProducts);
        });
      } else {
        filteredProducts =
          localPrice.length > 0 || localRating.length > 0
            ? currentProducts
            : oldProducts;
        newProducts.push(...filteredProducts);
      }

      handleSortProducts(sortOption, newProducts);
      setSortedProducts(newProducts);
    }
  }

  useEffect(() => {
    // Handles checking/unchecking
    const inputElmts = document.querySelectorAll('.sidebar input');
    inputElmts.forEach((elmt) => {
      elmt.addEventListener('click', () => {
        elmt.checked ? handleChecking(elmt) : handleUnchecking(elmt);
      });
    });

    // Sets defualt tags to localStorage
    localStorage.setItem('categories', JSON.stringify([]));
    localStorage.setItem('price', JSON.stringify([]));
    localStorage.setItem('rating', JSON.stringify([]));
  }, []);

  return (
    <Container className="sidebar">
      <div id="btns_container">
        <ClearFiltersBtn />
        <CloseSideBarBtn handleCloseSidebar={handleCloseSidebar} />
      </div>

      <Categories />
      <Prices />
      <Rating />
    </Container>
  );
}
