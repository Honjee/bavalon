import Lobby from './lobby'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as C from '../../../shared/util/connection'

import { getRoomPlayers, updateRoomPlayers } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const players = state.getIn(['players', 'players'])
  const createConnection = C.createConnection
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys()
  const userId = parseInt(keys[0])
  const userName = session.getIn([keys[0], 'username'])

  return {
    createConnection,
    players,
    userName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
    updateRoomPlayers: (players, playerName) => dispatch(updateRoomPlayers(players, playerName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Lobby))
