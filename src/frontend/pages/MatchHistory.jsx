import React, { useState } from 'react'
import { Flex, Stack, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { Pagination } from 'antd'
import MatchHistoryCard from '../components/MatchHistoryCard'
import './MatchHistory.css' // Import your CSS for custom styles

const MatchHistory = () => {
  const itemsPerPage = 9
  const totalItems = 612 // Replace with your actual number of items
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const currentItems = Array.from({ length: totalItems }, (_, index) => index).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Flex
        position='absolute'
        left='calc(2%)'
        top='49%'
        transform='translate(-50%, -50%)'
        w='115vh'
        direction='column'
        justifyContent='center'
        alignItems='center'
        p='4'
      >
        <Text
          className='valfont'
          color='white'
          fontSize='2.5rem'
          alignSelf='flex-start'
          textAlign='left'
        >
          Match History
        </Text>
        <Stack>
          <SimpleGrid columns={3} spacing='3vh'>
            {currentItems.map((item, index) => (
              <Box key={index} spacing='3vh'>
                <MatchHistoryCard id={1} recording={true} />
              </Box>
            ))}
          </SimpleGrid>

          <Flex justifyContent='center' mt='5vh'>
            <Pagination
              className='custom-pagination'
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={[]}
              responsive={true}
              hideOnSinglePage={true}
              showTitle={false}
              itemRender={(page, type, originalElement) => {
                if (type === 'prev') {
                  return (
                    <a href='hi' className='valfont' style={{ color: '#FE4553', marginRight: '3vh' }}>
                      Previous
                    </a>
                  )
                }
                if (type === 'next') {
                  return (
                    <a href='hi' className='valfont' style={{ color: '#FE4553', marginLeft: '3vh' }}>
                      Next
                    </a>
                  )
                }

                return originalElement
              }}
            />
          </Flex>
        </Stack>
      </Flex>
    </div>
  )
}

export default MatchHistory
