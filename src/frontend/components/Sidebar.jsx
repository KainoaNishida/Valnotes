import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flex, Box, Text, VStack, IconButton, Button, Icon, HStack } from '@chakra-ui/react'
import {
  BiLogOut,
  BiPackage,
  BiHeartCircle,
  BiHomeSmile,
  BiUser,
  BiHelpCircle,
} from 'react-icons/bi'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'

const Sidebar = () => {
  const location = useLocation()
  const currentUser = { email: 'kainoanishida@gmail.com', displayName: 'mentai boomer' }

  const slope = -0.60; // This slope value is derived from the clip-path polygon points.
  const containerHeight = 17; // Assume a container height for calculations.

  const calculateXOffset = (y) => slope * (containerHeight - y);

  const navItems = [
    { path: '/match-history', label: 'Match History' },
    { path: '/trainer', label: 'Trainer' },
    { path: '/upload', label: 'Upload' },
    { path: '/stats', label: 'Stats' },
    { path: '/community', label: 'Community' },
  ]

  return (
    <Flex
      flexDirection='column'
      w='90vh'
      minH='100vh'
      bg='#FE4553'
      clipPath={
        location.pathname !== '/community'
          ? 'polygon(0 0, 100% 0, 50% 100%, 0 100%)'
          : 'polygon(0 0, 40% 0, 40% 100%, 0 100%)'
      }
    >
      <Box as='nav' mt='10vh'>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
            <Box
              p={2}
              my='4vh'
              ml='3vh'
              color='white'
              _hover={{ bg: 'gray.200', color: 'black' }}
              style={{
                textDecoration: location.pathname === item.path ? 'underline' : 'none',
              }}
            >
              <Text fontSize='1.15rem' className='valfont'>
                {item.label}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
      {location.pathname === '/stats' ? (
      <Box  display='flex' className='valfont' position='absolute' alignItems='flex-end'
  justifyContent='flex-end' width='59vh' ml='20vh' bg='transparent' top='25%' clipPath={'polygon(0 0, 100% 0, 77% 100%, 0 100%)'}>
        <VStack spacing="5rem" color="white">
          <Box width='15vh' position="relative" style={{ right: `${calculateXOffset(50)}px`, borderBottom: '2px solid white'}}>
          <Text  fontSize="2xl">1.4 K/D RATIO</Text>
        </Box>
        <Box width='15vh' position="relative" style={{ right: `${calculateXOffset(150)}px`, borderBottom: '2px solid white'} }>
          <Text fontSize="2xl">73.2% KAST RATIO</Text>
        </Box>
        <Box width='15vh' position="relative" style={{ right: `${calculateXOffset(250)}px`, borderBottom: '2px solid white'}}>
          <Text fontSize="2xl">66.7% WINRATE</Text>
        </Box>
        <Box width='15vh' position="relative" style={{ right: `${calculateXOffset(350)}px`, borderBottom: '2px solid white' }}>
          <Text fontSize="2xl">Diamond Rank</Text>
        </Box>
        </VStack>
      </Box> ) : null }

      <Flex mt={'12vh'} flexDirection='column' w='35%'>
        <VStack ml={'3vh'}>
          <HStack
            as='footer'
            py='3'
            textAlign='left'
            borderTop='1px solid'
            borderColor={'white'}
            justifyContent={'space-between'}
            width='100%'
            paddingBottom={0}
          >
            <Box>
              <Text color='white' className='valfont' fontSize='1.0rem'>
                {currentUser?.displayName}
              </Text>
              <Text color={'white'} fontSize='0.8rem'>
                {currentUser?.email}
              </Text>
            </Box>
          </HStack>
          <HStack color='white' width='100%' py='3' borderTop='1px solid' borderColor={'white'}>
            <Icon as={AiOutlineSetting} />
            <Text>Settings</Text>
          </HStack>
          <HStack width='100%' color='white'>
            <Icon as={AiOutlineUser} />
            <Text>Profile</Text>
          </HStack>
          <HStack width='100%' color='white' borderTop='1px solid' borderColor={'white'}>
            <Icon
              as={BiLogOut}
              //   onClick={authLogout}
            />
            <Text>Logout</Text>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Sidebar
