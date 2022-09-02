import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Sidebar from './components/Navagator/Sidebar'
import Notifications from './components/Notifications'
import Options from './components/Options'
import VideoPlayer from './components/VideoPlayer'
import Home from './container/Home/Home'
import JoinPage from './container/JoinPage/JoinPage'
import LandingPage from './container/LandingPage/LandingPage'
      {/* <div className='flex flex-col flex-auto h-screen bg-woodsmoke-900'>
          <Notifications/>
          <div className='mx-auto flex justify-center text-center'>
            
            <div class="flex justify-center space-x-4 grid-flow-col auto-cols-max">
              <div><VideoPlayer/>
              </div>
            </div>
            <Options/>
            
          </div>
          

          <Sidebar/>
      </div> */}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/join" element={<JoinPage />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App