import React, { useEffect, useState } from 'react'
import { getMatchHistory } from '../api/requests'

const Profile = () => {
  const [matchHistory, setMatchHistory] = useState([])
  const puuid = 'x5nLd6PuNIpOGqO5r-VnF2NY5I3aH89EnGlbSxglu-nfyeWyrtqayPmQAsKESheQHGMJP9qz6x_nTA' // Example PUUID, replace with actual PUUID

  useEffect(() => {
    const fetchMatchHistory = async () => {
      try {
        const matches = await getMatchHistory(puuid)
        setMatchHistory(matches)
        console.log(matches)
      } catch (error) {
        console.error('Error fetching match history:', error)
      }
    }

    fetchMatchHistory()
  }, [puuid])

  return (
    <div>
      <h1>Profile</h1>
      <h2>Match History</h2>
    </div>
  )
}

export default Profile
