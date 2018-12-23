import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.css'

import Mission from './mission'

class Board extends React.Component {
  renderMissions() {
    const missionsList = []
    const { currentMission, missions } = this.props

    return <ul className={`mission-list`}>
      {
        missions.map(mission => {
        const missionNum = mission.get('round')
        const isCurrentMission = currentMission === missionNum

        return <Mission
                key={`mission-token ${missionNum}`}
                isCurrentMission={isCurrentMission}
                mission={mission}
                />
        })
      }
    </ul>
  }

  render() {
    return(
      <div className='board'>
        { this.renderMissions() }
      </div>
    )
  }
}

Board.propTypes = {
  currentMission: PropTypes.number,
  missions: PropTypes.array
}

export default Board
