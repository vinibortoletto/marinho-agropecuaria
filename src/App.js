import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Client from "./Contentful";

// Shared Components
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Cart";

import About from "./pages/About";
import Contact from "./pages/Contact";

import TermsAndConditions from "./pages/TermsAndConditions";
import ExchangesAndReturns from "./pages/ExchangesAndReturns";
import PaymentMethods from "./pages/PaymentMethods";
import PurchaseTerms from "./pages/PurchaseTerms";
import PageNotFound from "./pages/PageNotFound";

// Styles
import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Navbars />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Products} />
          <Route path="/detalhes-do-produto" component={ProductDetails} />
          <Route path="/carrinho" component={Cart} />

          <Route path="/quem-somos" component={About} />
          <Route path="/contato" component={Contact} />

          <Route path="/termos-e-condicoes" component={TermsAndConditions} />
          <Route path="/trocas-e-devolucoes" component={ExchangesAndReturns} />
          <Route path="/formas-de-pagamento" component={PaymentMethods} />
          <Route path="/termos-de-compra" component={PurchaseTerms} />
          <Route component={PageNotFound} />
        </Switch>
      </main>

      <Footer />
    </>
  );
}
