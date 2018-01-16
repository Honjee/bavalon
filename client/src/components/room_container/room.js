import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

import Lobby from './lobby_container'

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

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
    const roomId = this.props.room.get('id')
    return(
      <div>
        <Lobby roomId={ roomId } />
      </div>
    )
  }
}

Room.propTypes = {
  players: PropTypes.object,
  roomName: PropTypes.string,
  room: PropTypes.object,
  fetchRoom: PropTypes.func,
  fetchRoomPlayers: PropTypes.func,
  invalidRoom: PropTypes.bool,
  updateRoomPlayers: PropTypes.func
}

export default Room
