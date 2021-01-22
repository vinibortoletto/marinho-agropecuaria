import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// Shared Components
import Navbars from './components/Navbars';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/Products/ProductDetails';
import Cart from './pages/Cart';

import About from './pages/About';
import Contact from './pages/Contact';

import TermsAndConditions from './pages/TermsAndConditions';
import ExchangesAndReturns from './pages/ExchangesAndReturns';
import PaymentMethods from './pages/PaymentMethods';
import PurchaseTerms from './pages/PurchaseTerms';
import PageNotFound from './pages/PageNotFound';

import Login from './pages/Login';
import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';

// Styles
import { GlobalStyles } from './helpers/GlobalStyles';
import './helpers/variables.css';

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />

      {location.pathname === '/login' || location.pathname === '/cadastro' ? (
        <Navbars simple />
      ) : (
        <Navbars />
      )}

      <main>
        <Switch>
          {/* Home Page */}
          <Route exact path="/" component={Home} />

          {/* Products Pages */}
          <Route path="/produtos" component={Products} />
          <Route path="/detalhes-do-produto" component={ProductDetails} />

          {/* Default Pages */}
          <Route path="/carrinho" component={Cart} />
          <Route path="/quem-somos" component={About} />
          <Route path="/contato" component={Contact} />
          <Route path="/termos-e-condicoes" component={TermsAndConditions} />
          <Route path="/trocas-e-devolucoes" component={ExchangesAndReturns} />
          <Route path="/formas-de-pagamento" component={PaymentMethods} />
          <Route path="/termos-de-compra" component={PurchaseTerms} />

          {/* User profile */}
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Signup} />
          {/* <Route path="/minha-conta" component={Dashboard} /> */}

          {/* Page not found */}
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </main>

      <Footer />
    </>
  );
}
