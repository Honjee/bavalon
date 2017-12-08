import { combineReducers } from 'redux-immutable'
import session from './components/auth_form/reducer.js'

const RootReducer = combineReducers({
  session
})

export default RootReducer
