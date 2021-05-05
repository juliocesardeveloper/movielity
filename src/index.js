import React from 'react';
import ReactDOM from 'react-dom';
import { MovielityApp } from './MovielityApp';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={ store }>
    <MovielityApp />
  </Provider>,
  document.getElementById('root')
);