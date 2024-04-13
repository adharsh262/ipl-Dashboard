// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {competingTeam} = latestMatchDetails

  console.log(competingTeam)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default LatestMatch
