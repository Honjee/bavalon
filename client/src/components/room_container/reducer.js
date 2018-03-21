import { fromJS } from 'immutable'

import { RECEIVE_PLAYERS, RECEIVE_PLAYERS_ERRORS } from './actions'

const initialState = fromJS({
  players: {}
})

const PlayersReducer = (state = initialState, action) => {
  let new_players
  switch(action.type) {
    case RECEIVE_PLAYERS:
      new_players = Object.assign({}, action.players)
      new_players.players = new_players.players ? new_players.players.split(',') : ""
      state = state.setIn(['players'], fromJS(new_players))
      break
    case RECEIVE_PLAYERS_ERRORS:
      state = state.setIn(['error'], fromJS(action.errors))
      break
    default:
  }

  return state
}

export default PlayersReducer
