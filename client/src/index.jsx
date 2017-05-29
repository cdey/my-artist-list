import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './configureStore.jsx';

const Index = () => (
  <App />
);

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Index />
  </Provider>,
  document.getElementById('app')
);