import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import Style from './style.css'

class Game extends React.Component {
  componentDidMount() {
    this.props.fetchRoom(this.props.roomName).then(
      () => this.props.getRoomPlayers(this.props.roomId)
    )
  }

  render() {
    return (
      <div>
        { this.props.roomName }
        { this.props.currentMission }
      </div>

    )
  }
}

Game.propTypes = {
  currentMission: PropTypes.number,
  fetchRoom: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  players: PropTypes.object,
  roomId: PropTypes.number,
  roomName: PropTypes.string,
  room: PropTypes.object,
  userName: PropTypes.string
}

export default Game
