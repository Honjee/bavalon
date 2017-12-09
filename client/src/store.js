import { createStore, applyMiddleware } from 'redux'
import RootReducer from './root_reducer'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

const middlewares = [thunk]

if(process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')
  middlewares.push(createLogger())
}

const configureStore = (preloadedState = fromJS({})) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
)

export default configureStore
