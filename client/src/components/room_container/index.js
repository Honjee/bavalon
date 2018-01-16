import Room from './room'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createRoomPlayers, getRoomPlayers, updateRoomPlayers } from './actions'
import { getRoom } from '../home_container/create_room_container/actions'
import { ensureLoggedIn } from '../../shared/util/on_enter'
import * as C from '../../shared/util/connection'

const mapStateToProps = (state, ownProps) => {
  const roomName = ownProps.match.params.roomId
  const room = state.getIn(['room'])
  const players = state.getIn(['players'])
  const invalidRoom = Boolean(!room || !room.id)
  const createConnection = C.createConnection

  return {
    createConnection,
    roomName,
    room,
    invalidRoom
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRoom: room => dispatch(getRoom(room)),
    fetchRoomPlayers: roomPlayers => dispatch,
    createRoomPlayers: (room, players) => dispatch(createRoomPlayers(room, players)),
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId)),
    updateRoomPlayers: players => dispatch(updateRoomPlayers(players))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Room))
