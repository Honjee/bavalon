import CreateRoomForm from './create_room_form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createRoom } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {

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
