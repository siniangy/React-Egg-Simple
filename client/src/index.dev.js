import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './view/app';
import store from './store/store';
import 'babel-polyfill';

const renderDOM = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
renderDOM(App);

/**
 * 热更新相关，开发环境所需
 */
if (module.hot) {
  module.hot.accept('./view/app.js', () => {
    const App = require('./view/app.js').default;
    renderDOM(App);
  })
}