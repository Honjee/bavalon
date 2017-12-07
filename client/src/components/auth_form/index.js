import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signUp, logIn } from './actions'

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.currentUser ? true : false
  // const errors = state.get('errors.session')
  return {
    loggedIn,
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
)(SessionForm)
