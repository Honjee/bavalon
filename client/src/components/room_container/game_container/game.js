import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import Style from './style.css'

class Game extends React.Component {
  componentDidMount() {
    this.props.fetchRoom(this.props.roomName)
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
  currentMission: PropTypes.string,
  fetchRoom: PropTypes.func,
  players: PropTypes.object,
  roomId: PropTypes.string,
  roomName: PropTypes.string,
  room: PropTypes.object,
  userName: PropTypes.userName
}

export default Game
