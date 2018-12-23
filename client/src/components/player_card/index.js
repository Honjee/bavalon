import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.css'

const PlayerCard = ({id, isCandidate, isKing, isYou, name}) => {
  return(
    <li key={`player-card-${id}`}>
      <div className={`player-card ${isKing} ${isCandidate} ${isYou}`}>
        { name }
      </div>
    </li>
  )
}

PlayerCard.propTypes = {
  isCandidate: PropTypes.string,
  isKing: PropTypes.string,
  id: PropTypes.string,
  isYou: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default PlayerCard
