import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RestoreScroll from './helpers/RestoreScroll';

import App from './App';

// Context
import { ProductProvider } from './helpers/Context';
import { SearchProvider } from './helpers/Context/SearchContext';

ReactDOM.render(
  <Router>
    <ProductProvider>
      <SearchProvider>
        <RestoreScroll>
          <App />
        </RestoreScroll>
      </SearchProvider>
    </ProductProvider>
  </Router>,
  document.getElementById('root'),
);
