import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const userName = this.props.userName || "roycekim"
    const roomId = this.props.roomId
    this.props.getRoomPlayers(roomId).then(
      ({ players }) => this.props.updateRoomPlayers(players, userName)
    )
    this.props.createConnection('RoomChannel', roomId)
  }

  renderPlayers() {
    const players = (this.props.players  && this.props.players.getIn(['players'])) || []
    return players.map(player => {
      return <li key={ player.id }>{ player }</li>
    })
  }

  render() {
    return(
      <div>
        <ul className='players-container'>
          { this.renderPlayers() }
        </ul>
      </div>
    )
  }
}

Lobby.propTypes = {
  createConnection: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  room: PropTypes.string,
  updateRoomPlayers: PropTypes.func,
  userName: PropTypes.string
}

export default Lobby
