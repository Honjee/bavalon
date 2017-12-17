import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRoom(this.props.roomName)
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
  roomName: PropTypes.string,
  room: PropTypes.object,
  fetchRoom: PropTypes.func,
  invalidRoom: PropTypes.bool
}

export default Room
