import React from 'react';

// Images
import productImg from '../../images/products/product_sample.png';

// Components
import { Title } from '../../components/Title/styles';
import Btns from './Btns/index';
import Sidebar from './Sidebar/index';
import ProductList from './ProductList/index';

// Styles
import { Container } from './styles';

export default function Products() {
  function handleCloseSidebar() {
    // Close sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');

    // Enable scroll
    const navbarCategories = document.querySelector('.navbar_categories');
    navbarCategories.classList.contains('shrink') && navbarCategories.classList.remove('shrink');

    window.onscroll = () => {
      window.pageYOffset > 20
        ? navbarCategories.classList.add('shrink')
        : navbarCategories.classList.remove('shrink');
    };
  }

  function handleShowSidebar() {
    // Show sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show');

    // Shrink navbar categories
    const navbarCategories = document.querySelector('.navbar_categories');
    navbarCategories.classList.add('shrink');

    // Disable scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  return (
    <Container>
      <Title>Produtos</Title>

      <div className="content">
        <Btns handleShowSidebar={handleShowSidebar} />

        <div className="sidebar_products_wrapper">
          <Sidebar handleCloseSidebar={handleCloseSidebar} />
          <ProductList />
        </div>
      </div>
    </Container>
  );
}
