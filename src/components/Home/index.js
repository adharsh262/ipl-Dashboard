// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardApiUrl()
  }

  getTeamCardApiUrl = async () => {
    const getfetchedData = await fetch('https://apis.ccbp.in/ipl')
    const getJsonData = await getfetchedData.json()
    const {teams} = getJsonData
    const getFormatedData = teams.map(foreachTeam => ({
      id: foreachTeam.id,
      name: foreachTeam.name,
      teamImageUrl: foreachTeam.team_image_url,
    }))
    this.setState({teamsList: getFormatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="bgContainer">
        <div className="headingHomePageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImg"
          />
          <h1>IPL DASHBOARD</h1>
        </div>
        <div className="unorderedListConatainer">
          {isLoading ? (
            <div testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="unorderedListTeamCard">
              {teamsList.map(forEachTeamCard => (
                <TeamCard
                  key={forEachTeamCard.id}
                  forEachTeamCard={forEachTeamCard}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
