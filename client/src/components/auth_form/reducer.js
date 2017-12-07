import { RECEIVE_CURRENT_USER } from './actions'
import { Map, fromJS } from 'immutable'

const initialState = fromJS({
  currentUser: null
})

const SessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return state.set('currentUser', action.currentUser)
    default:
      return state;
  }
}

export default fromJS(SessionReducer)
