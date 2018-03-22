import Lobby from './lobby'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as C from '../../../shared/util/connection'

import { getRoomPlayers, updateRoomPlayers, updateStorePlayers } from '../actions'
import { hasMordred, hasOberon } from '../../../shared/constants/minions'
import { hasPercival } from '../../../shared/constants/villagers'

const mapStateToProps = (state, ownProps) => {
  const players = state.getIn(['players', 'players'])
  const createConsumer = C.createConsumer
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys()
  const userName = session.getIn([keys[0], 'username'])
  const room = state.getIn(['room', 'room'])
  const OPTIONS = [hasMordred, hasOberon, hasPercival]

  return {
    room,
    createConsumer,
    players,
    userName,
    OPTIONS
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
    updateRoomPlayers: (players, playerName, status) => dispatch(updateRoomPlayers(players, playerName, status)),
    updateStorePlayers: players => dispatch(updateStorePlayers(players))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Lobby))
