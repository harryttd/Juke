'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer /> 
  </Provider>,
  document.getElementById('app')
);