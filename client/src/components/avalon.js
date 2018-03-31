import './avalon.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import AuthRoute from '../shared/util/route_util'
import AuthForm from './auth_form'
import HomeContainer from './home_container'
import RoomContainer from './room_container'

const Avalon = ({store, getState}) =>  {

  return (
    <div className='app-container'>
      <header>
      </header>
      <AuthRoute exact path='/login' component={ AuthForm }/>
      <AuthRoute exact path='/signup' component={ AuthForm }/>
      <Route path='/lobby' component={ HomeContainer }/>
      <Route path='/room/:roomId' component={ RoomContainer }/>
    </div>
  )
}

Avalon.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func,
  history: PropTypes.object
}

export default Avalon
