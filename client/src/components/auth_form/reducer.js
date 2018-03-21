import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from './actions'
import { Map, fromJS } from 'immutable'

const initialState = Map({})

const SessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      state = fromJS(action.currentUser)
      break
    case RECEIVE_ERRORS:
      break
    default:

  }

  return state
}

export default SessionReducer
