import React from 'react';
import { render } from 'react-dom';
import Routers from './router/router';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './config/DevTools';
const store = configureStore()

render(
  <Provider store={store}>
      <div>
        <Routers />
        <DevTools />
      </div>
  </Provider>,
  document.getElementById('root')
)
