import React from 'react'
import {
  Flex,
  Divider,
  AbsoluteCenter,
  Box,
  Stack,
  Text,
  VStack,
  IconButton,
  Button,
  Icon,
  HStack,
} from '@chakra-ui/react'

const UploadBox = () => {
  return (
    <Box
      border='0.3vh'
      borderColor='white'
      borderStyle='dashed'
      p={4}
      width='100%'
      height='100%'
      borderRadius='md'
      justifyContent={'center'}
      alignContent={'center'}
    >
      <Stack color='white' justifyContent='center' alignContent='center' className='valfont'>
        <Text fontSize='1.5rem' textAlign={'center'}>
          Drag or drop files here
        </Text>
        <Box color='white' position='relative' padding='10'>
          <Divider borderColor='white' borderWidth='0.1vh' />
          <AbsoluteCenter fontSize='3rem'>Or</AbsoluteCenter>
        </Box>
        <Button
          mt={'2vh'}
          bg='#FE4553'
          border='none'
          alignSelf='center'
          width='40vh'
          height='5vh'
          borderRadius={'0.5vh'}
        >
          <Text color='white' className='valfont' fontSize='1.2rem'>
            Browse Files
          </Text>
        </Button>
      </Stack>
    </Box>
  )
}

export default UploadBox
