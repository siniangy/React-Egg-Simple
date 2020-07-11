import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './view/app';
import store from './store/store';
import 'babel-polyfill';

const renderDOM = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  )
}
renderDOM(App);