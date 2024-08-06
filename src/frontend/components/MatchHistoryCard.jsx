import React, { useState } from 'react'
import { Card, Image, Stack, CardBody, Text, Heading } from '@chakra-ui/react'
import icebox from '../../icebox.jpg'
import ascent from '../../icebox.jpg'
import bind from '../../icebox.jpg'

const mapImages = {
  icebox,
  ascent,
  bind,
  // Add other maps here
}

const convertIDtoMap = (id) => {
  switch (id) {
    case '1':
      return 'icebox'
    case '2':
      return 'ascent'
    case '3':
      return 'bind'
    // Add more cases for other map IDs
    default:
      return 'icebox' // Default image or handling
  }
}

const MatchTrainerCard = ({ mapID, recording }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  const mapName = convertIDtoMap(mapID)
  const mapImage = mapImages[mapName] || mapImages['default']
  const cardOpacity = recording ? '100%' : '90%'

  return (
    <Card
      width='35vh'
      opacity={cardOpacity}
      p={10}
      borderRadius='0.3vh'
      direction={'row'}
      bg='white'
      overflow='hidden'
      variant='outline'
    >
      <Image
        borderRadius='0.3vh'
        mb={0}
        objectFit='cover'
        maxW={'15vh'}
        src={mapImage}
        alt={mapName}
      />

      <Stack justifyContent='center' className='valfont' mb={0} spacing={0}>
        <CardBody ml={'2vh'}>
          <Heading height='2vh' mt={6} mb={0} size='sm'>
            XX-XX-XXXX
          </Heading>
          <Stack spacing={{ base: 2, md: 4 }}>
            <Text fontSize='1.2rem' height='1vh' mt={10} mb={2}>
              Victory
            </Text>
            <Text mt='5vh' fontSize='.9rem' height='1vh' mb={0}>
              {mapName}
            </Text>
            <Text fontSize='.9rem' height='1vh'>
              Agent
            </Text>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default MatchTrainerCard
