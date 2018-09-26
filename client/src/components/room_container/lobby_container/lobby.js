import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

const JOIN = 'JOIN'
const REMOVE = 'REMOVE'
const ROOMCHANNEL = 'RoomChannel'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = { room: this.props.room.toJS() }
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount() {
    const { userName, roomId, playerId, getRoomPlayers, updateRoomPlayers } = this.props

    getRoomPlayers(roomId).then(
      ({ players }) => {
        return updateRoomPlayers(players.players, playerId, JOIN)
      }
    )

    this.App = this.props.createConsumer( ROOMCHANNEL, roomId, {
      received: this.received.bind(this)
    })
  }

  componentWillUnMount() {
    const { players, userName, playerId, updateRoomPlayers } = this.props
    updateRoomPlayers(players, playerId, REMOVE)
    this.App.cable.disconnect()
  }

  received (data) {
    switch(data.type) {
      case 'NEW_PLAYER':
        this.props.getRoomPlayers(this.props.roomId)
        break;
      case 'ROOM_START':
        this.props.updateStoreRoom(data.room)
        break;
    }
  }

  renderPlayers() {
    const list = this.props.list
    const renderedList = []

    for (let playerId in list) {
      renderedList.push(
        <li key={playerId} value={playerId}>{list[playerId]}</li>
      )
    }
    return (
      <div className='players-container'>
        <h2>{ "Current Players: " }</h2>

        <ul>
          { renderedList }
        </ul>
        <div className='bottom-bar'/>
      </div>
    )
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
      <h2>{ "Set game options:" }</h2>

      { this.props.OPTIONS.map(option => {
        checked = this.state.room[option]
        return <li className='option-item' key={ option }>
          { option }
          <input
            type='checkbox'
            onChange={ this.updateOption(option) }
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
      <h1>{ roomName }</h1>
      <h3>{ 'lobby' }</h3>
    </div>
  }

  startGame() {
    const room = this.state.room
    room.started = true
    room.current_mission = 1
    this.props.startRoomGame(room)
  }

  renderStartButton() {
    return <input
            className='button-start-game'
            type='button'
            value='Start Game'
            onClick={ this.startGame }
            disabled={ this.props.disableStart }
            />
  }

  render() {
    const header = this.renderHeader()
    const toggles = this.renderToggles()
    const players = this.renderPlayers()
    const startButton = this.renderStartButton()

    return(
      <div className='lobby'>
        { header }
        { players }
        { toggles }
        { startButton }
      </div>
    )
  }
}

Lobby.propTypes = {
  disableStart: PropTypes.bool,
  createConsumer: PropTypes.func,
  list: PropTypes.object,
  getRoomPlayers: PropTypes.func,
  room: PropTypes.object,
  roomId: PropTypes.number,
  updateRoomPlayers: PropTypes.func,
  userName: PropTypes.string,
  players: PropTypes.object,
  playerId: PropTypes.string,
  startRoomGame: PropTypes.func,
  OPTIONS: PropTypes.array,
  updateStorePlayers: PropTypes.func, // adds players to store
  updateStoreRoom: PropTypes.func // pushes room start
}

export default Lobby
