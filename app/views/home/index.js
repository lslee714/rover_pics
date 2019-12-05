import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';


import App from './components/rover-pics';
import '../stylesheets/home/home.scss';


const store = configureStore(); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
