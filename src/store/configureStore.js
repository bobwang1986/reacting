import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReduce from '../reducers'

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    )
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
