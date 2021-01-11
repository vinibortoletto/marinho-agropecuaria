import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RestoreScroll from './helpers/RestoreScroll';

import App from './App';

// Context
import { ProductProvider } from './helpers/Context';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <RestoreScroll>
        <App />
      </RestoreScroll>
    </Router>
  </ProductProvider>,
  document.getElementById('root'),
);
