import Room from './room'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {  } from './actions'
import { getRoom } from '../home_container/create_room_container/actions'
import { ensureLoggedIn } from '../../shared/util/on_enter'

const mapStateToProps = (state, ownProps) => {
  const roomName = ownProps.match.params.roomId
  const room = state.getIn(['room'])
  const invalidRoom = !room || !room.id

  return {
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
