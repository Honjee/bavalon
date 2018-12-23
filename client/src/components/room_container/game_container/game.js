import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.css'

import PlayerCard from '../../player_card'
import Board from '../../board'

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
          key={`player-card ${id}`}
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

  renderBoard() {
    const { currentMission, missions } = this.props
    return <Board
            className='game-board'
            currentMission={ currentMission }
            missions={ missions }
            />
  }

  render() {
    const { roomName, roomId } = this.props
    const player_list = this.renderPlayers()
    const board = this.renderBoard()

    return (
      <div className={`game-main ${roomId}`}>
        <header className={`game-header`}>
          { roomName }
        </header>

        { player_list }
        { this.renderBoard() }
      </div>

    )
  }
}

Game.propTypes = {
  currentMission: PropTypes.number,
  list: PropTypes.object,
  fetchRoom: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  missions: PropTypes.array,
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
