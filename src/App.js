import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Shared Components
import Navbars from './components/Navbars'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/Products/ProductDetails'
import Cart from './pages/Cart'

import About from './pages/About'
import Contact from './pages/Contact'

import TermsAndConditions from './pages/TermsAndConditions'
import ExchangesAndReturns from './pages/ExchangesAndReturns'
import PaymentMethods from './pages/PaymentMethods'
import PurchaseTerms from './pages/PurchaseTerms'
import PageNotFound from './pages/PageNotFound'

// Styles
import { GlobalStyles } from './helpers/GlobalStyles'
import './helpers/variables.css'

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Navbars />

      <main>
        <Switch>
          {/* Home Page */}
          <Route exact path='/' component={Home} />

          {/* Products Pages */}
          <Route path='/produtos' component={Products} />
          <Route exact path='/detalhes-do-produto' component={ProductDetails} />

          {/* Default Pages */}
          <Route exact path='/carrinho' component={Cart} />
          <Route exact path='/quem-somos' component={About} />
          <Route exact path='/contato' component={Contact} />
          <Route exact path='/termos-e-condicoes' component={TermsAndConditions} />
          <Route exact path='/trocas-e-devolucoes' component={ExchangesAndReturns} />
          <Route exact path='/formas-de-pagamento' component={PaymentMethods} />
          <Route exact path='/termos-de-compra' component={PurchaseTerms} />
          <Route component={PageNotFound} />
        </Switch>
      </main>

      <Footer />
    </>
  )
}
