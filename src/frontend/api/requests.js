import axios from 'axios'

export const getMatchHistory = async (puuid) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/content`)
    return response.data
  } catch (error) {
    console.error('Error fetching match history:', error)
    throw error
  }
}

export const fetchPlayers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Re-throw the error so it can be caught in the calling component
  }
}
