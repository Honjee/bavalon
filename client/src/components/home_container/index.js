import Home from './home'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {  } from './actions'
import { ensureLoggedIn } from '../../shared/util/on_enter'

const mapStateToProps = (state, ownProps) => {
  const session = state.getIn(['session'])
  return {
    ensureLoggedIn,
    session
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  null
)(withRouter(Home))
