import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  let matchStatusClassName
  if (matchStatus === 'Won') {
    matchStatusClassName = 'match-status-won'
  } else {
    matchStatusClassName = 'match-status-lost'
  }
  return (
    <li className="matchcard-container">
      <img
        className="matchcard-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="matchcard-heading">{competingTeam}</p>
      <p className="matchcard-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
