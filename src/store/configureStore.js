import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReduce from '../reducers'
import DevTools from '../containers/DevTools';
const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,
        logger
    ),
    DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReduce, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
