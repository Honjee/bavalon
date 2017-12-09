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

const getRoom = (roomId) => {
  return $.ajax({
    url: `/v1/rooms/${roomId}`,
    method: 'GET'
  })
}

export { createRoom, updateRoom, getRoom }
