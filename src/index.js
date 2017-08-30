import React from 'react';
import { render } from 'react-dom';
import Routers from './router/router';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
)
