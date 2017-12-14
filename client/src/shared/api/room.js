import $ from 'jquery'

const createRoom = (room) => {
  return $.ajax({
    url: '/v1/rooms',
    data: { room },
    method: 'POST'
  })
}

const updateRoom = (room) => {
  return $.ajax({
    url: `/v1/rooms/${room.id}`,
    data: { room },
    method: 'PATCH'
  })
}

const getRoom = (roomName) => {
  return $.ajax({
    url: `/v1/rooms/${roomName}`,
    method: 'GET'
  })
}

export { createRoom, updateRoom, getRoom }
