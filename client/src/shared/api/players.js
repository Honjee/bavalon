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

const updateRoomPlayers = (players, playerName, method) => {
  return ajax({
    url: `/v1/rooms/${players.room_id}/players/${players.id}?playername=${playerName}&status=${method}`,
    data: { players },
    method: 'PATCH'
  })
}

export { createRoomPlayers, getRoomPlayers, updateRoomPlayers }
