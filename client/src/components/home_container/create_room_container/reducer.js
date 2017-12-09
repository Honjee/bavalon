import { Map, fromJS } from 'immutable'

import { RECEIVE_CURRENT_ROOM } from './actions'

const initialState = fromJS({
  room: {}
})

const RoomReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_ROOM:
      state = state.setIn(['room'], fromJS(action.room))
  }

  return state
}

export default RoomReducer