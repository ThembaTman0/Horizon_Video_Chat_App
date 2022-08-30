import React from 'react'
import VideoPlayer from '../../components/VideoPlayer'
import Notifications from '../../components/Notifications'
import Sidebar from '../../components/Navagator/Sidebar'
import Options from '../../components/Options'

const Home = () => {
  return (
    <div className='flex flex-col flex-auto h-screen bg-woodsmoke-900'>
        {/* <h1>Heoll</h1> */}
        <Notifications/>
        <div className='mx-auto flex justify-center text-center'>
          
          <div className="flex justify-center space-x-4 grid-flow-col auto-cols-max">
            <div><VideoPlayer/>
            </div>
          </div>
          <Options/>
          
        </div>
        

        <Sidebar/>
    </div>
  )
}

export default Home