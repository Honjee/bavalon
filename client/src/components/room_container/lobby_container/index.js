import Lobby from './lobby'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as C from '../../../shared/util/connection'

import { getRoomPlayers, updateRoomPlayers, updateStorePlayers } from '../actions'
import { updateRoom } from '../../home_container/create_room_container/actions'

import { hasMordred, hasOberon } from '../../../shared/constants/minions'
import { hasPercival } from '../../../shared/constants/villagers'

const mapStateToProps = (state) => {
  const players = state.getIn(['players', 'players'])
  const createConsumer = C.createConsumer
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys()
  const userName = session.getIn([keys[0], 'username'])
  const room = state.getIn(['room', 'room'])
  const OPTIONS = [hasMordred, hasOberon, hasPercival]
  const playerList = players.get('players')
  const playerCount = playerList && playerList.size
  const disableStart = !playerCount || playerCount < 5

  return {
    room,
    disableStart,
    createConsumer,
    players,
    userName,
    OPTIONS
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
    updateRoomPlayers: (players, playerName, status) => dispatch(updateRoomPlayers(players, playerName, status)),
    updateStorePlayers: players => dispatch(updateStorePlayers(players)),
    startRoomGame: room => dispatch(updateRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Lobby))
