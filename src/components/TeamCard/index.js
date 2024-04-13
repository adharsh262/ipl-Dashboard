// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {forEachTeamCard} = this.props

    const {id, name, teamImageUrl} = forEachTeamCard

    return (
      <Link to={`/team-matches/${id}`} className="linkContasiner">
        <li className="listItemTeamCard">
          <img src={teamImageUrl} alt={name} className="teamLogo" />
          <p className="teamName">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
