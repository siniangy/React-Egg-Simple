import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'babel-polyfill';

const renderDOM = Component => {
  render(
    <Component />,
    document.getElementById('app')
  )
}
renderDOM(App);