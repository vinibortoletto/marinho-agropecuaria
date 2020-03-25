import React from "react";
import { Switch, Route } from "react-router-dom";

// Shared Components
import Navbars from "./components/Navbars/index";
import Footer from "./components/Footer/index";

// Pages
import Home from "./pages/Home/index.js";
import Products from "./pages/Products/index.js";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";

import TermsAndConditions from "./pages/TermsAndConditions/index.js";
import ExchangesAndReturns from "./pages/ExchangesAndReturns/index.js";
import PaymentMethods from "./pages/PaymentMethods/index.js";
import PurchaseTerms from "./pages/PurchaseTerms/index.js";
import PageNotFound from "./pages/PageNotFound/index.js";

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
