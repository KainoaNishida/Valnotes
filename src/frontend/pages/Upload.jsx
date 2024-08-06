import React, { useState, useEffect } from 'react'
import { Flex, Button, Box, Text, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { fetchPlayers } from '../api/requests'

import UploadBox from '../components/UploadBox'

const Upload = () => {
  return (
    <Flex position='absolute' top='12%' left='calc(57%)' justifyContent='center'>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        padding={4}
        borderRadius='md'
        height='75vh'
        width='60vh'
      >
        <UploadBox />
      </Flex>
    </Flex>
  )
}
// http://localhost:3000/oauth2-callback
export default Upload
