// Write your code here

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchObj: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchedApiUrl()
  }

  formmatedData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    venue: data.venue,
    umpires: data.umpires,
  })

  getTeamMatchedApiUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamMatchApiUrl = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const jsonData = await teamMatchApiUrl.json()

    const dataFormat = data => ({
      latestMatchDetails: this.formmatedData(data.latest_match_details),
      teamBannerUrl: data.team_banner_url,
    })

    this.setState({teamMatchObj: dataFormat(jsonData), isLoading: false})
  }

  render() {
    const {teamMatchObj, isLoading} = this.state

    const {teamBannerUrl, latestMatchDetails} = teamMatchObj

    console.log(latestMatchDetails.competingTeam)

    return (
      <div className="bgContTeamMatchs">
        <div className="bgCont">
          <h1>Hi</h1>
        </div>
      </div>
    )
  }
}

export default TeamMatches
