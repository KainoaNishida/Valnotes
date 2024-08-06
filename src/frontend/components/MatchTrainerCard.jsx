import React, { useState } from 'react'
import {
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Text,
  Heading,
  HStack,
  Spacer,
} from '@chakra-ui/react'
import icebox from '../../icebox.jpg'
import CheckBox from './CheckBox'

const convertIDtoMap = (id) => {
  return null
}

const MatchTrainerCard = ({ mapID }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <Card direction={'column'} overflow='hidden' variant='outline'>
      <Image mb={0} objectFit='cover' maxW={'20vh'} src={icebox} alt='Mapname' />

      <Stack className='valfont' mb={0} spacing={0}>
        <CardBody>
          <Heading height='2vh' mt={6} mb={0} size='sm'>
            XX-XX-XXXX
          </Heading>
          <Stack spacing={{ base: 2, md: 4 }}>
            <Text fontSize='1.2rem' height='1vh' mt={10} mb={2}>
              Victory
            </Text>
            <Text fontSize='.9rem' height='1vh' mb={0}>
              Mapname
            </Text>
            <HStack mb={0}>
              <Text fontSize='.9rem' height='1vh'>
                Agent
              </Text>
              <Spacer />
              <CheckBox height='1vh' isChecked={isChecked} onChange={handleCheckboxChange} />
            </HStack>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default MatchTrainerCard
