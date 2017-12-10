import './avalon.css'
import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

import AuthRoute from '../shared/util/route_util'
import AuthForm from './auth_form'
import HomeContainer from './home_container'

const Avalon = ({store, getState}) =>  {
  return (
    <div className='app-container'>
      <header>
      </header>

      <Route path='/lobby' component={ HomeContainer }/>
      <AuthRoute exact path='/login' component={ AuthForm }/>
      <AuthRoute exact path='/signup' component={ AuthForm }/>
    </div>
  )
}

Avalon.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func,
  history: PropTypes.object
}

export default Avalon
