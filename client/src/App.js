import React from 'react'
import Sidebar from './components/Navagator/Sidebar'
import Notifications from './components/Notifications'
import Options from './components/Options'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  return (
    <div className='flex flex-col flex-auto h-screen bg-woodsmoke-900'>
        
        <div className='mx-auto flex justify-center text-center'>

          <div class="flex justify-center space-x-4 grid-flow-col auto-cols-max">
            <div><VideoPlayer/></div>
          </div>
          
          <Options />

          
        </div>
        <Sidebar>
          <Notifications/>
        </Sidebar>
    </div>
  )
}

export default App