import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';                                         //Asincrono.
import store from './store/index';





ReactDOM.render(
  <Provider store={store}>                                                                                                
  <React.StrictMode>
  <Auth0Provider domain="dev-zhpwq20v.us.auth0.com"
     clientId="a6PmvRC5nQ8xy4pmCx05zTufW8463Eym" 
     redirectUri={window.location.origin}>
    <App />
    </Auth0Provider >
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
