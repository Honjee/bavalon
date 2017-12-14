import { combineReducers } from 'redux-immutable'
import session from './components/auth_form/reducer.js'
import home from './components/home_container/reducer.js'
import room from './components/home_container/create_room_container/reducer.js'

const RootReducer = combineReducers({
  session,
  home,
  room
})

export default RootReducer
