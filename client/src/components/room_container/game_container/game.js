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
      <div>{'GAMEHERE'}</div>
    )
  }
}

Game.propTypes = {
  fetchRoom: PropTypes.func,
  roomId: PropTypes.string,
  roomName: PropTypes.string,
  room: PropTypes.object
}
export default Game
