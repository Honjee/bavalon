import Game from './game'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getRoom, playerInRoom } from '../../home_container/create_room_container/actions'
import { getRoomPlayers } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const players = state.getIn(['players', 'room_players'])
  const session = state.getIn(['session'])
  const [ ...keys ] = session.keys()
  const userName = session.getIn([keys[0], 'username'])
  const room = state.getIn(['room', 'room'])
  const roomName = room.get('name')
  const roomId = room.get('id')
  const currentMission = room.get('current_mission')
  const playerId = keys[0]
  const list = JSON.parse(players.get('list', '{}'))
  const playerCount = list && Object.keys(list).length
  const missions = room.get('missions')

  return {
    currentMission,
    list,
    missions,
    playerCount,
    playerId,
    players,
    room,
    roomId,
    roomName,
    userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerInRoom: (roomName, playerId) => {
      return dispatch(playerInRoom(roomName, playerId)
    )},
    fetchRoom: room => dispatch(getRoom(room)),
    getRoomPlayers: roomId => dispatch(getRoomPlayers(roomId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Game))
