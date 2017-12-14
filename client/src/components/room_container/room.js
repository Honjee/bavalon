import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRoom(roomName)
  }

  invalidRoom() {
    return(
      <div className='empty-room'>
      </div>
    )
  }

  render() {
    if(this.props.invalidRoom) return this.invalidRoom()

    return(
      <div>
      </div>
    )
  }
}

Room.propTypes = {
  roomName: PropTypes.number,
  room: PropTypes.object,
  fetchRoom: PropTypes.func,
  invalidRoom: PropTypes.boolean
}

export default Room
