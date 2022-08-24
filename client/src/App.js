import React from 'react'
import Sidebar from './components/Navagator/Sidebar'
import Notifications from './components/Notifications'
import Options from './components/Options'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  return (
    <div className='flex flex-col flex-auto h-screen bg-woodsmoke-900'>
        
        <div className='mx-auto text-center'>
          
          <div class=" space-x-4 grid grid-flow-col auto-cols-max">
            <div><VideoPlayer/></div>
            <div><VideoPlayer/></div>
            <div><VideoPlayer/></div>
          </div>
          <Options>
            <Notifications/>
          </Options>
        </div>
        <Sidebar/>
    </div>
  )
}

export default App