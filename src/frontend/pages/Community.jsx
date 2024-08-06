import React from 'react';
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Spacer, 
  Button,
  HStack,
  Text,
  Td,
  Stack,
  TableContainer,
} from '@chakra-ui/react';
import InviteInput from '../components/InviteInput';

const Community = () => {
  const data = [
    { name: 'Group Name 1', people: 5, rank: 'Diamond' },
    { name: 'Group Name 2', people: 7, rank: 'Platinum' },
    // Add more data rows as needed
  ];
  const maxRows = 10; // Set the maximum number of rows
  const rowsToFill = Math.max(maxRows - data.length, 0); // Calculate the number of placeholder rows needed

  return (
    <Flex justifyContent='center' left='35vh' position='absolute' width='146vh' mt='-1vh' height='101vh'>
    <Stack mt='7vh'>
    <HStack >
    <Text mb={'3vh'} className='valfont' color='white' fontSize='2.5rem'>Community Dashboard</Text>
    <Spacer /> 
    <Button bg='#FE4553' color='white' border='none' borderRadius='0.5vh' className='valfont' height='4vh' width='18vh' mr='2vh'>Create Community</Button>
    <Button borderRadius='0.5vh' bg='transparent' borderWidth='3px' borderColor='white' color='white' className='valfont' height='4vh' width='18vh'>Join</Button>
    </HStack>
      <TableContainer borderRadius='1vh' className='valfont' justifyContent='center' mt='0' width='115vh' overflowY='auto' maxHeight='70vh'>
        <Table borderRadius='1vh' bg='#373E47' variant='unstyled' borderCollapse='collapse'
          style={{ borderSpacing: 0 }}>
          <Thead bg='#686D73' height='6vh'>
            <Tr>
              <Th  width='50vh' textAlign='center' color='white'>Community Name</Th>
              <Th width='25%' textAlign='center' color='white'># of People</Th>
              <Th width='25%' textAlign='center' color='white'>Average Rank</Th>
              <Th width='25%' textAlign='center' color='white'>Invite Others</Th>
            </Tr>
          </Thead>
          <Tbody >
            {data.map((row, index) => (
              <Tr key={index} height='6vh'>
                <Td color='white' textAlign='center'>{row.name}</Td>
                <Td color='white' textAlign='center'>{row.people}</Td>
                <Td color='white' textAlign='center'>{row.rank}</Td>
                <Td color='white' textAlign='center'><InviteInput /></Td>
              </Tr>
            ))}
            {Array.from({ length: rowsToFill }).map((_, index) => (
              <Tr key={`placeholder-${index}`} height='6vh'>
                <Td textAlign='center' colSpan={4} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      </Stack>
    </Flex>
    
  );
}

export default Community;
