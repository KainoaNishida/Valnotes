import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'
import './App.css'
import Login from './frontend/pages/Login'
import Profile from './frontend/pages/Profile'
import Sidebar from './frontend/components/Sidebar'
import MatchHistory from './frontend/pages/MatchHistory'
import Upload from './frontend/pages/Upload'
import Community from './frontend/pages/Community'

const App = () => {
  return (
    <Router>
      <Flex bg='#121822' minHeight='100vh'>
        <SidebarWrapper />
        <Box as='main' flex='1' p={4} bg='gray.50'>
          <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/match-history' element={<MatchHistory />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/community' element={<Community />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
      </Flex>
    </Router>
  )
}

const SidebarWrapper = () => {
  const location = useLocation()
  const currentRoute = location.pathname.toLowerCase()

  const shouldShowSidebar = currentRoute !== '/login'

  return shouldShowSidebar ? (
    <Box as='aside' bg='gray.100'>
      <Sidebar tri={currentRoute} />
    </Box>
  ) : null
}

export default App
