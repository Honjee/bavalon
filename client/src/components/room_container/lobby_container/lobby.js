import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

const JOIN = 'JOIN'
const REMOVE = 'REMOVE'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const userName = this.props.userName || "roycekim"
    const roomId = this.props.roomId
    this.props.getRoomPlayers(roomId).then(
      ({ players }) => this.props.updateRoomPlayers(players, userName, JOIN)
    )
    this.App = this.props.createConnection('RoomChannel', roomId)
  }

  componentWillUnMount() {
    const players = this.props.players
    const userName = this.props.userName || "roycekim"
    this.props.updateRoomPlayers(players, userName, REMOVE)
    this.App.cable.disconnect()
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
  userName: PropTypes.string,
  players: PropTypes.object
}

export default Lobby