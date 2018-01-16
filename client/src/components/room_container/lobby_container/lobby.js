import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getRoomPlayers(this.props.roomId).then(d => {
      debugger
    })
    this.props.createConnection('PlayersChannel')
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

Lobby.propTypes = {
  createConnection: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  roomId: PropTypes.number,
  updateRoomPlayers: PropTypes.func
}

export default Lobby
