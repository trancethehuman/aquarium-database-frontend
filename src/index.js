import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-3443m6xg.us.auth0.com"
    clientId="ByD9gYdMjJMy4hkTB1QjgXhws6QCVZa6"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
