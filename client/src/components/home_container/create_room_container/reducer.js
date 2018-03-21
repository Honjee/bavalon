import { fromJS } from 'immutable'

import { RECEIVE_ROOM, RECEIVE_ROOM_ERROR } from './actions'

const initialState = fromJS({
  room: {}
})

const RoomReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ROOM:
      state = state.setIn(['room'], fromJS(action.room))
      break
    case RECEIVE_ROOM_ERROR:
      state = state.setIn(['error'], fromJS(action.error))
      break
    default:

  }

  return state
}

export default RoomReducer
