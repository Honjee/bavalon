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
  return (
    <div className='app-container'>
        <header>
        </header>

        <AuthRoute exact path='/login' component={ AuthForm }/>
        <AuthRoute exact path='/signup' component={ AuthForm }/>
        <Route exact path='/lobby' component={ HomeContainer }/>
    </div>
  )
}

Avalon.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func
}

export default Avalon;
