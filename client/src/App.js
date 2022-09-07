import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'

import Home from './container/Home/Home'
import JoinPage from './container/JoinPage/JoinPage'
import LandingPage from './container/LandingPage/LandingPage'


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