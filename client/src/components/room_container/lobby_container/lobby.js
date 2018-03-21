import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

const JOIN = 'JOIN'
const REMOVE = 'REMOVE'
const ROOMCHANNEL = 'RoomChannel'
const OPTIONS = ['hasMordred', 'hasPercival', 'hasOberon']

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = { room: this.props.room.toJS() }
  }

  componentDidMount() {
    const userName = this.props.userName || "roycekim"
    const roomId = this.props.roomId
    this.props.getRoomPlayers(roomId).then(
      ({ players }) => this.props.updateRoomPlayers(players, userName, JOIN)
    )

    this.App = this.props.createConsumer( ROOMCHANNEL, roomId, {
      received: this.received.bind(this)
    })
  }

  componentWillUnMount() {
    const players = this.props.players
    const userName = this.props.userName || "roycekim"
    this.props.updateRoomPlayers(players, userName, REMOVE)
    this.App.cable.disconnect()
  }

  received (data) {
    this.props.updateStorePlayers(data)
  }

  renderPlayers() {
    const players = (this.props.players  && this.props.players.getIn(['players'])) || []
    return players.map(player => {
      return <li className='players' key={ player.id }>{ player }</li>
    })
  }

  updateOption(option) {
    return e => {
      const room = this.state.room
      room[option] = e.target.checked
      this.setState({ room })
    }
  }

  renderToggles() {
    let checked
    return <ul className='option-toggle'>
      { OPTIONS.map(option => {
        checked = this.state.room[option]
        return <li className='option-item' key={ option }>
          { option }
          <input
            type='checkbox'
            onClick={ this.updateOption(option) }
            checked={ checked }
            />
        </li>
      }) }
    </ul>
  }

  renderHeader() {
    const room = this.props.room
    const roomName = room.get('name')
    return <div className='lobby-header'>
      <h1>{roomName}</h1>
    </div>
  }

  render() {
    const header = this.renderHeader()
    const toggles = this.renderToggles()
    return(
      <div>
        { header }
        { toggles }
        <ul className='players-container'>
          { this.renderPlayers() }
        </ul>
      </div>
    )
  }
}

Lobby.propTypes = {
  createConsumer: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  room: PropTypes.object,
  roomId: PropTypes.number,
  updateRoomPlayers: PropTypes.func,
  userName: PropTypes.string,
  players: PropTypes.object,
  updateStorePlayers: PropTypes.func // adds players to store
}

export default Lobby
