import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signUp, logIn } from './actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps, history) => {
  const session = state.getIn(['session'])
  const loggedIn = state.currentUser ? true : false
  const redirect = ownProps.match.path === '/signup' ? "Log In" : "Sign Up"
  const redirectPath = ownProps.match.path === '/signup' ? '/login' : '/signup'
  const linkToLobby = (history) => history.replace('/lobby')

  // const errors = state.get('errors.session')
  return {
    loggedIn,
    redirect,
    redirectPath,
    linkToLobby
    // errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? "Sign Up" : "Log In"
  const action = formType === "Sign Up" ? signUp : logIn

  return {
    processForm: user => dispatch(action(user)),
    formType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SessionForm))
