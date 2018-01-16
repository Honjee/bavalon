import { combineReducers } from 'redux-immutable'
import session from './components/auth_form/reducer.js'
import home from './components/home_container/reducer.js'
import room from './components/home_container/create_room_container/reducer.js'
import players from './components/room_container/reducer'

const RootReducer = combineReducers({
  session,
  home,
  room,
  players
})

export default RootReducer
