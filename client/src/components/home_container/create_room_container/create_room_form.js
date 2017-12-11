import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Style from './style.css'

import C from '../../../shared/constants'

const { MINIONS, VILLAGERS, MAPPING } = C

class CreateRoomForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state={ [MINIONS.MORDRED]: }
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
        <input className='checkbox' type='checkbox' onClick={ this.checkCharacter(char) } />
      </div>
    )
  }

  linkToRoom() {

  }

  roomSubmit() {
    this.props.createRoom(this.state).then()
  }

  render() {
    const mordred = this.getCheckBox(MINIONS.MORDRED)
    const oberon = this.getCheckBox(MINIONS.OBERON)
    const percival = this.getCheckBox(VILLAGERS.PERCIVAL)
    debugger
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
  createRoom: PropTypes.func
}

export default CreateRoomForm
