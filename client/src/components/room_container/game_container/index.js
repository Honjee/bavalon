import Game from './game'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getRoom } from '../../home_container/create_room_container/actions'

const mapStateToProps = (state, ownProps) => {
  const players = state.getIn(['players', 'players'])
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys()
  const userName = session.getIn([keys[0], 'username'])
  const room = state.getIn(['room', 'room'])

  return {
    players,
    room,
    roomName,
    userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRoom: room => dispatch(getRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Game))
