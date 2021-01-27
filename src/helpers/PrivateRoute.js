import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        return location.pathname === '/minha-conta' ||
          location.pathname === '/minha-conta/' ? (
          <Redirect to="/minha-conta/pedidos" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
}
