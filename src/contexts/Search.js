import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const SearchContext = React.createContext(null);

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const history = useHistory();
  const location = useLocation();

  const [searchContent, setSearchContent] = useState([]);

  function toggleShowSearch() {
    // Show "search" elmt
    const searchElmt = document.querySelector('.navbar_search_mobile');
    const boxShadow = document.querySelector('.navbar_bottom .box_shadow');

    if (searchElmt.classList.contains('show')) {
      searchElmt.classList.remove('show');
      boxShadow.classList.remove('show');
    } else {
      searchElmt.classList.add('show');
      boxShadow.classList.add('show');
    }

    // Set focus to input
    const searchInputElmt = searchElmt.querySelector('input');
    searchInputElmt.focus();

    // Hide "categories" elmt if open
    const categoriesElmt = document.querySelector('.navbar_categories_mobile');
    categoriesElmt.classList.contains('show') &&
      categoriesElmt.classList.remove('show');
  }

  function cleanText(text) {
    const newText = text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    return newText;
  }

  function searchProducts(e) {
    const inputContent = e.target.value;
    const newInputContent = cleanText(inputContent).trim().split(' ');

    setSearchContent(newInputContent);
  }

  function goToProductsPage(e) {
    e.preventDefault();

    if (searchContent.length > 0) {
      let newSearchContent = searchContent;

      // Turn array into string
      newSearchContent =
        typeof searchContent === 'object'
          ? newSearchContent.toString().replace(/,/g, ' ')
          : null;

      // Change route
      history.push(`/produtos/${newSearchContent}`);

      // Hide Search
      toggleShowSearch();
    }
  }

  // Get searchContent from location
  useEffect(() => {
    const newSearchContent = location.pathname
      .split('produtos/')
      .pop()
      .trim()
      .split(' ');

    setSearchContent(newSearchContent);
  }, [location]);

  return (
    <SearchContext.Provider
      value={{
        goToProductsPage,
        searchProducts,
        toggleShowSearch,
        cleanText,
        searchContent,
        setSearchContent,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
