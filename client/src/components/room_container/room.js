import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

import Lobby from './lobby_container'
import Game from './game_container'

class Room extends React.Component {
  componentDidMount() {
    this.props.fetchRoom(this.props.roomName)
  }

  invalidRoom() {
    return(
      <div className='empty-room'>
      </div>
    )
  }

  render() {
    if(this.props.invalidRoom) return this.invalidRoom()
    const { roomId, roomName } = this.props
    const MainScreen = this.props.gameStarted ?
      <Game roomId={ roomId } roomName={ roomName } /> :
      <Lobby roomId={ roomId } />

    return(
      <div>
        { MainScreen }
      </div>
    )
  }
}

Room.propTypes = {
  roomId: PropTypes.string,
  roomName: PropTypes.string,
  room: PropTypes.object,
  fetchRoom: PropTypes.func,
  gameStarted: PropTypes.bool,
  invalidRoom: PropTypes.bool
}

export default Room
