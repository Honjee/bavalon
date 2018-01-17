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
    this.props.getRoomPlayers(this.props.roomId).then(
      ({ players }) => this.props.updateRoomPlayers(players, userName)
    )
    this.props.createConnection('PlayersChannel')
  }

  renderPlayers() {
    const players = (this.props.players  && this.props.players.getIn(['players'])) || []
    players.map(p => {
      debugger
    })
  }

  render() {
    return(
      <div>
        { this.renderPlayers() }
      </div>
    )
  }
}

Lobby.propTypes = {
  createConnection: PropTypes.func,
  getRoomPlayers: PropTypes.func,
  roomId: PropTypes.number,
  updateRoomPlayers: PropTypes.func,
  userName: PropTypes.string
}

export default Lobby
