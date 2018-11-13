import { ajax } from 'jquery'

const createRoomPlayers = roomId => {
  return ajax({
    url: `/v1/rooms/${roomId}/players`,
    method: 'POST'
  })
}

const getRoomPlayers = roomId => {
  return ajax({
    url: `/v1/rooms/${roomId}/players`,
    method: 'GET'
  })
}

const updateRoomPlayers = (players, playerId, method) => {
  return ajax({
    url: `/v1/rooms/${players.room_id}/players/${players.id}?new_player=${playerId}&status=${method}`,
    data: { players },
    method: 'PATCH'
  })
}

const checkPlayerInRoom = (roomId, playerId) => {
  return ajax({
    url: `/v1/rooms/${roomId}/players/${playerId}`,
    method: 'GET'
  })
}

export {
  createRoomPlayers,
  getRoomPlayers,
  updateRoomPlayers,
  checkPlayerInRoom
}
