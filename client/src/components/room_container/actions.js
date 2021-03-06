import * as PlayersApi from '../../shared/api/players.js'

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const RECEIVE_PLAYERS_ERRORS = 'RECEIVE_PLAYERS_ERRORS'

const receivePlayers = players => ({
  type: RECEIVE_PLAYERS,
  players
})

const receiveErrors = errors => ({
  type: RECEIVE_PLAYERS_ERRORS,
  errors
})

export const createRoomPlayers = (room, players) => dispatch => (
  PlayersApi.createRoomPlayers(room, players).then(
    players => dispatch(receivePlayers(players)),
    errors => {
      dispatch(receiveErrors(errors))
    }
  )
)

export const getRoomPlayers = roomId => dispatch => (
  PlayersApi.getRoomPlayers(roomId).then(
    room => dispatch(receivePlayers(room)),
    errors => dispatch(receiveErrors(errors))
  )
)

export const updateRoomPlayers = (players, playerId, status) => dispatch => (
  PlayersApi.updateRoomPlayers(players, playerId, status).then(
    players => dispatch(receivePlayers(players)),
    errors => dispatch(receiveErrors(errors))
  )
)

// updates players store from websocket data
export const updateStorePlayers = players => dispatch => dispatch(receivePlayers(players))
