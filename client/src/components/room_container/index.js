import Room from './room'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getRoom } from '../home_container/create_room_container/actions'
// import { ensureLoggedIn } from '../../shared/util/on_enter'

const mapStateToProps = (state, ownProps) => {
  const roomName = ownProps.match.params.roomId
  const room = state.getIn(['room', 'room'])
  const invalidRoom = Boolean(!room || !room.get('id'))
  const gameStarted = room.get('started')
  const roomId = room.get('id')

  return {
    gameStarted,
    roomId,
    roomName,
    room,
    invalidRoom
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRoom: room => dispatch(getRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Room))
