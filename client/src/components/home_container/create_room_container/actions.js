import * as RoomApi from '../../../shared/api/room'

export const RECEIVE_ROOM = 'RECEIVE_ROOM'
export const RECEIVE_ROOM_ERROR = 'RECEIVE_ROOM_ERROR'

const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
})

const receiveErrors = errors => ({
  type: RECEIVE_ROOM_ERROR,
  errors
})

export const createRoom = room => dispatch => (
  RoomApi.createRoom(room).then(
    room => dispatch(receiveRoom(room)),
    errors => {
      dispatch(receiveErrors(errors)
    )}
  )
)

export const getRoom = roomName => dispatch => (
  RoomApi.getRoom(roomName).then(
    room => dispatch(receiveRoom(room)),
    errors => dispatch(receiveErrors(errors))
  )
)

export const updateRoom = room => dispatch => (
  RoomApi.updateRoom(room).then(
    room => dispatch(receiveRoom(room)),
    errors => dispatch(receiveErrors(errors))
  )
)
export const updateStoreRoom = room => dispatch => dispatch(receiveRoom(room))
