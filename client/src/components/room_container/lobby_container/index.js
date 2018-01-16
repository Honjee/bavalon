import Lobby from './lobby'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as C from '../../../shared/util/connection'

import { getRoomPlayers, updateRoomPlayers } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const players = state.getIn(['players', 'players'])
  const createConnection = C.createConnection

  return {
    createConnection,
    players
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
    updateRoomPlayers: players => dispatch(updateRoomPlayers(players))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Lobby))
