import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to='/lobby' />
    )
  )} />
)

const mapStateToProps = state => {
  const session = state.get('session')
  const currentUser = session.getIn(['currentUser'])
  return { loggedIn: Boolean(currentUser)}
}

const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
)

export default AuthRoute
