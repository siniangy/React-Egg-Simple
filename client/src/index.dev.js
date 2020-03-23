import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';

const renderDOM = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}
renderDOM(App);
if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    renderDOM(App);
  })
}