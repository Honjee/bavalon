import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

import { map } from 'lodash'

import CreateRoomForm from './create_room_container'

const TABS = {
  JOIN: 'join',
  CREATE: 'create',
  EXPLAIN: 'explain' }

class Home extends React.Component {
  constructor(props, history) {
    super(props)
    this.state = {room: "", tab: TABS.JOIN }
    this.setState = this.setState.bind(this)
    this.updateField = this.updateField.bind(this)
    this.joinRoom = this.joinRoom.bind(this)
  }

  componentWillMount() {
    const { session, history } = this.props
    this.props.ensureLoggedIn(session, history)
  }

  updateField(e) {
    this.setState({ room: e.target.value })
  }

  joinRoom() {
    const room = this.state.room
    debugger
    this.props.history.push(`room/${room}`)
  }

  getJoinRoom() {
    return(
      <div className="join-room-container">
      <h1>Join Room</h1>
      <form className='join-room-form' >
        <input className='join-room-input' type='text' placeholder='Enter name' onChange={ this.updateField }/>
        <br />
        <input className='join-room-submit' type='submit' value='Enter' onClick={ this.joinRoom } />
      </form>
      </div>
    )
  }

  getCreateRoomForm() {
    return(
      <CreateRoomForm />
    )
  }

  getExplain() {
    return(
      <div></div>
    )
  }

  setTab(tab) {
    return () => this.setState({ tab })
  }

  getToggleClick() {
    return map(TABS, (tab, key) => (
      <input className={ `${tab}-tab-button` }
             onClick={ this.setTab(tab) }
             type='submit'
             value={ tab }
             key={ key } />
    ))
  }

  getToggleHeader() {
    const tabs = this.getToggleClick()

    return(
      <div className='toggle-header'>
        { tabs }
      </div>
    )
  }

  getToggle() {
    switch(this.state.tab) {
      case TABS.JOIN:
        return this.getJoinRoom()
      case TABS.CREATE:
        return this.getCreateRoomForm()
      case TABS.EXPLAIN:
        return this.getExplain()
    }
  }

  render() {
    const toggleHeader = this.getToggleHeader()
    const toggle = this.getToggle()

    return(
      <div className='home-container'>
        { toggleHeader }
        { toggle }
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object,
  ensureLoggedIn: PropTypes.func,
  session: PropTypes.object
}

export default Home
