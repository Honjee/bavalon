import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

import C from '../../../shared/constants'

const { MINIONS, VILLAGERS, MAPPING } = C

class CreateRoomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={ [MINIONS.MORDRED]: false, [MINIONS.OBERON]: false, [VILLAGERS.PERCIVAL]: true }
    this.checkCharacter = this.checkCharacter.bind(this)
    this.roomSubmit = this.roomSubmit.bind(this)
  }

  checkCharacter(char) {
    return (e) => {
      const checked = e.target.checked
      this.setState({ char: checked })
    }
  }

  getCheckBox(char) {
    return(
      <div className='checkbox-wrapper' >
        <label className='checkbox-label'>{ MAPPING[char] }</label>
        <input
          className='checkbox'
          checked={ this.state[char] }
          type='checkbox'
          onChange={ this.checkCharacter(char) } />
      </div>
    )
  }

  linkToRoom(roomId) {
    this.props.history.replace(`/rooms/${roomId}`)
  }

  roomSubmit() {
    const room = this.state
    room.owner_id = this.props.userId
    this.props.createRoom(room).then((room) => {
      debugger
      this.linkToRoom()
    })
  }

  render() {
    const mordred = this.getCheckBox(MINIONS.MORDRED)
    const oberon = this.getCheckBox(MINIONS.OBERON)
    const percival = this.getCheckBox(VILLAGERS.PERCIVAL)

    return(
      <div className='create-room-container'>
        <h2 className='create-room-header'> Create room </h2>
        <form>
          <h3 className='special-character-header'> Special Characters </h3>
            { mordred }
            { oberon }
            { percival }
          <input type='submit' value='Submit' onClick={ this.roomSubmit } />
        </form>
      </div>
    )
  }
}

CreateRoomForm.propTypes = {
  createRoom: PropTypes.func,
  history: PropTypes.object,
  userId: PropTypes.number
}

export default CreateRoomForm
