import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link className="nav-links" to={`/team-matches/${id}`}>
      <li>
        <div className="teamcard-container">
          <img className="team-image" src={teamImageUrl} alt={`${name}`} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
