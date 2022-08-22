import React from 'react'
import Sidebar from './components/Navagator/Sidebar'
import Notifications from './components/Notifications'
import Options from './components/Options'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  return (
    <div className='flex flex-col flex-auto h-full bg-woodsmoke-900'>
        
        <div className='mx-auto text-center'>
          <VideoPlayer/>
          <Options>
            <Notifications/>
          </Options>
        </div>
        <Sidebar/>
    </div>
  )
}

export default App