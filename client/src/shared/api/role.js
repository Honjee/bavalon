import { ajax } from 'jquery'

const getRole = (roomId, playerId) => {
  return ajax({
    url: `/v1/rooms/${roomId}/roles/${playerId}`,
    method: 'GET'
  })
}

const getAllRoles = (roomId) => {
  return ajax({
    url: `/v1/rooms/${roomId}/roles`,
    method: 'GET'
  })
}

export {
  getRole,
  getAllRoles
}
