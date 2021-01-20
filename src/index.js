import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RestoreScroll from './helpers/RestoreScroll';

import App from './App';

// Context
import { ProductProvider } from './contexts/Product';
import { SearchProvider } from './contexts/Search';
import { AuthProvider } from './contexts/Auth';

ReactDOM.render(
  <Router>
    <ProductProvider>
      <SearchProvider>
        <AuthProvider>
          <RestoreScroll>
            <App />
          </RestoreScroll>
        </AuthProvider>
      </SearchProvider>
    </ProductProvider>
  </Router>,
  document.getElementById('root'),
);
