import { ajax } from 'jquery'

const createRoomPlayers = roomId => {
  return ajax({
    url: `/v1/rooms/${roomId}/players`,
    method: 'GET'
  })
}

const getRoomPlayers = roomId => {
  debugger
  return ajax({
    url: `/v1/rooms/${roomId}/players`,
    method: 'GET'
  })
}

const updateRoomPlayers = players => {
  return ajax({
    url: `/v1/rooms/${players.roomId}/players`,
    data: { players },
    method: 'PATCH'
  })
}

export { createRoomPlayers, getRoomPlayers, updateRoomPlayers }
