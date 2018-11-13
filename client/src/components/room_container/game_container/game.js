import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import Style from './style.css'

import PlayerCard from '../../player_card'

class Game extends React.Component {
  componentDidMount() {
    const { roomName, playerId } = this.props
    this.props.playerInRoom(roomName, playerId).then(
      () => this.props.getRoomPlayers(this.props.roomId)
    )
  }

  renderPlayers() {
    const list = this.props.list
    const playerId = parseInt(this.props.playerId)
    const renderedList = []

    for (let id in list) {
      const isYou = id === this.props.playerId ? 'isYou' : ''
      renderedList.push(
        <PlayerCard
          key={`player-card-${id}`}
          id={id}
          isYou={isYou}
          name={list[id]}
          />
      )
    }

    return <ul className='player-card-list'>
      { renderedList }
    </ul>
  }

  render() {
    const { roomName, roomId, currentMission } = this.props
    const player_list = this.renderPlayers()

    return (
      <div className={`game-main-${roomId}`}>
        <header className={`game-header`}>
          { roomName }
          { currentMission }
        </header>

        { player_list }
      </div>

    )
  }
}

Game.propTypes = {
  currentMission: PropTypes.number,
  list: PropTypes.object,
  fetchRoom: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  playerCount: PropTypes.number,
  playerId: PropTypes.string,
  players: PropTypes.object,
  playerInRoom: PropTypes.func,
  roomId: PropTypes.number,
  roomName: PropTypes.string,
  room: PropTypes.object,
  userName: PropTypes.string
}

export default Game
