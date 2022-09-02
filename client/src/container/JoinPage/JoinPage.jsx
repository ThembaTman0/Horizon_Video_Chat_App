import React from 'react'
import Sidebar from '../../components/Navagator/Sidebar'
import DateTime from '../../components/DateTime'
import LandingNav from '../../components/Navagator/LandingNav'
const JoinPage = () => {
  return (
    <div className='flex flex-col flex-auto backdrop-filter backdrop-blur-sm bg-opacity-80 bg-gradient-to-br from-bismark-700 to-ebony-clay-900  h-screen'>

    <div className='mt-36 w-[120px] mx-[10%]'>
        <DateTime/>
    </div>
    <div className='mt-6 w-[120px] h-screen mx-[10%]'>
        <LandingNav/>
    </div>
    <div>

    </div>
</div>
  )
}

export default JoinPage