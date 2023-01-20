import React from 'react'
import Navbar from './components/Navbar'
import { NotificationProvider } from './context/notificationContext'
import Home from './page/Home'

const App = () => {
  return (<>
    <NotificationProvider>
      <Navbar />
    </NotificationProvider>
    <Home />
  </>
  )
}

export default App