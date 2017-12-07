import { combineReducers } from 'redux'
import session from './components/auth_form/reducer.js'

const RootReducer = combineReducers({
  session
})

export default RootReducer
