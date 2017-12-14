import Room from './room'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {  } from './actions'
import { ensureLoggedIn } from '../../shared/util/on_enter'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Room))
