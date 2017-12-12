import CreateRoomForm from './create_room_form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createRoom } from './actions'

const mapStateToProps = (state, ownProps) => {
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys();
  const userId = parseInt(keys[0])
  return {
    userId,
    session
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRoom: (room) => dispatch(createRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateRoomForm))
