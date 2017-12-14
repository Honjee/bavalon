import * as RoomApi from '../../../shared/api/room'

export const RECEIVE_ROOM = 'RECEIVE_ROOM'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
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

export const getRoom = room => dispatch => (
  RoomApi.getRoom(room).then(
    currentUser => dispatch(receiveRoom(currentUser)),
    errors => dispatch(receiveErrors(errors))
  )
)

export const updateRoom = () => dispatch => (
  RoomApi.updateRoom().then(
    room => dispatch(receiveRoom(room)),
    errors => dispatch(receiveErrors(errors))
  )
)
