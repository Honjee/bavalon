import Room from './room'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getRoomPlayers } from './actions'
import { getRoom } from '../home_container/create_room_container/actions'
import { ensureLoggedIn } from '../../shared/util/on_enter'
import * as C from '../../shared/util/connection'

const mapStateToProps = (state, ownProps) => {
  const roomName = ownProps.match.params.roomId
  const room = state.getIn(['room', 'room'])
  const players = state.getIn(['players', 'room'])
  const invalidRoom = Boolean(!room || !room.get('id'))

  return {
    roomName,
    room,
    players,
    invalidRoom
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRoom: room => dispatch(getRoom(room)),
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Room))
