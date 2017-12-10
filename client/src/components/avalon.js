import './avalon.css'
import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import AuthRoute from '../shared/util/route_util'
import {
  Route,
  Redirect,
  Switch,
  Link,
  Router,
  HashRouter
} from 'react-router-dom'

import AuthForm from './auth_form'
import HomeContainer from './home_container'

const Avalon = ({store, getState}) =>  {

  const _getSession = () => {
    return store.getState().getIn(['session'])
  }

  const _ensuredLoggedIn = (nextState, replace) => {
    const session = _getSession()
    if(session) {
      replace('/login')
    }
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    const session = _getSession()
    if(session) {
      replace('/lobby')
    }
  }

  return (
    <div className='app-container'>
        <header>
        </header>

        <AuthRoute exact path='/login' onEnter={ _redirectIfLoggedIn } component={ AuthForm }/>
        <AuthRoute exact path='/signup' onEnter={ _redirectIfLoggedIn } component={ AuthForm }/>
        <Route exact path='/lobby' onEnter={ _ensuredLoggedIn }component={ HomeContainer }/>
    </div>
  )
}

Avalon.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func
}

export default Avalon;
