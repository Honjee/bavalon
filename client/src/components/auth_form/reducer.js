import { RECEIVE_CURRENT_USER } from './actions'
import { Map, fromJS, get } from 'immutable'

const initialState = fromJS({
  currentUser: null
})

const SessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      state = state.setIn(['currentUser', get(action, 'currentUser')], null)
  }
  
  return state
}

export default fromJS(SessionReducer)
