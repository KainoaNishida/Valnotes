import React, { useState, useEffect } from 'react'
import { Flex, Button, Box, Text, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { fetchPlayers } from '../api/requests'

const Login = () => {
  const handleLogin = () => {
    // The server will handle the OAuth2 flow and redirection
    // window.location.href = 'http://localhost:3000/';
  }
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPlayers()
        setData(result)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    getData()
  }, [])

  console.log(data)
  const navigate = useNavigate()

  return (
    <div className='background'>
      {/* <button position='absolute' left='50vh' color='white' onClick={handleLogin}>Sign In with Riot Games</button> */}

      <Flex minH='100vh' bg='#121822' clipPath='polygon(60% 25%, 85% 25%, 80% 75%, 50% 75%)'></Flex>
      <Stack alignContent='center' top='40%' left='65%' position='absolute'>
        <Text color='white' fontSize='4.0rem' className='valfont'>
          Valnotes
        </Text>

        <Button
          mt={'-5vh'}
          width='37vh'
          height='6vh'
          className='valfont'
          fontSize='1.0rem'
          bg='#FE4553'
          color='white'
          onClick={() => navigate('/match-history')}
          _hover={{ bg: '#e03e47' }} // Optional hover effect
          _focus={{ outline: 'none', boxShadow: 'none' }} // Remove focus outline and shadow
          _active={{ outline: 'none', boxShadow: 'none' }} // Remove active state shadow
          border='none' // Ensure no border
          borderRadius='0.3vh'
        >
          <Text>Sign In with Riot Games </Text>
        </Button>
      </Stack>

      {/* <h1>LOGINGINGGNINGINGINGINIGNIGNGINGINGINGIGNIGN</h1> */}
    </div>
  )
}
// http://localhost:3000/oauth2-callback
export default Login
