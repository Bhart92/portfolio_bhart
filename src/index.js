import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import LoadingPage from './components/LoadingPage'
import './styles/styles.scss';


setTimeout(() => {
    let hasRendered = true;
    const renderApp = () => {
      if (hasRendered) {
          ReactDOM.render(<AppRouter />, document.getElementById('root'));
          hasRendered = true;
      }
    };
    renderApp();
}, 500);
  
  ReactDOM.render(<LoadingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
