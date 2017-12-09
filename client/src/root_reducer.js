import { combineReducers } from 'redux-immutable'
import session from './components/auth_form/reducer.js'
import home from './components/home_container/reducer.js'

const RootReducer = combineReducers({
  session,
  home
})

export default RootReducer
