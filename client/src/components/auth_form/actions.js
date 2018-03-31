import * as SessionApi from '../../shared/api/user'
import { bootStrapUser, wipeSession } from '../../shared/util/bootstrap'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const signUp = user => dispatch => (
  SessionApi.signUp(user).then(
    currentUser => {
      bootStrapUser(currentUser)
      return dispatch(receiveCurrentUser(currentUser))
    },
    errors => {
      dispatch(receiveErrors(errors)
    )}
  )
)

export const logIn = user => dispatch => (
  SessionApi.signIn(user).then(
    currentUser => {
      bootStrapUser(currentUser)
      return dispatch(receiveCurrentUser(currentUser))
    },
    errors => dispatch(receiveErrors(errors))
  )
)

export const logOut = () => dispatch => (
  SessionApi.signOut().then(
    user => {
      wipeSession()
      return dispatch(receiveCurrentUser(user))
    },
    errors => dispatch(receiveErrors(errors))
  )
)
