import React from 'react'
import PropTypes from 'prop-types'

const Mission = ({isCurrentMission, mission}) => {
  let status;
  const goodWins = mission.get('good_wins')
  const badWins = mission.get('bad_wins')
  const numVoters = mission.get('num_voters')
  const needTwoFails = mission.get('need_two_fails')

  if (!(goodWins && badWins)) {
    status = 'pending'
  } else if (goodWins + badWins === numVoters) {
    if (!needTwoFails && badWins > 1) {
      status = 'evil'
    } else if (needTwoFails && badWins > 2) {
      status = 'evil'
    } else {
      status = 'good'
    }
  }

  return(
    <li className={`mission ${isCurrentMission ? 'current' : ''}`}>
      <div className={`indicator ${status}`}/>
      <span>{ mission.get('round') }</span>
    </li>
  )
}

Mission.propTypes = {
  isCurrentMission: PropTypes.boolean,
  mission: PropTypes.object
}

export default Mission
