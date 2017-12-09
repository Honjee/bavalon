import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from './actions'
import { Map, fromJS } from 'immutable'
import get from 'lodash/get'

const initialState = fromJS({
  currentUser: null
})

const SessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      state = state.setIn(['currentUser'], fromJS(action.currentUser))

    case RECEIVE_ERRORS:
      debugger

  }

  return state
}

export default SessionReducer
