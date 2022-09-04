import React , { useState, useContext, useRef } from 'react';
import Sidebar from '../../components/Navagator/Sidebar'
import DateTime from '../../components/DateTime'
import LandingNav from '../../components/Navagator/LandingNav'
import {IoCalendar, IoVideocam, IoChatbox} from 'react-icons/io5'
import { Button } from '@material-ui/core';
import {SiAddthis} from 'react-icons/si'
import {Link} from 'react-router-dom'  
import { SocketContext } from '../../SocketContext'

const JoinPage = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, handleVideo, stream } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div className='flex flex-col flex-auto backdrop-filter backdrop-blur-sm bg-opacity-80 bg-gradient-to-br from-bismark-700 to-ebony-clay-900  h-screen'>

    <div className='mt-36 w-[120px] mx-[10%]'>
        <DateTime/>
    </div>
    <div className=' mt-6 w-[120px] h-screen mx-[10%]'>
      <div className='p-2 flex space-x-16 text-white'>
          <div className=''>
          <Link to='/home'>
              <Button 
                      
                      style={{ 
                      maxWidth: '65px', maxHeight: '65px', minWidth: '65px', minHeight: '65px',
                      borderRadius: '12px',
                      backgroundColor: "#FF5F15"
                      }}
                      variant="contained" >
                  <div className='text-white text-3xl'>
                      <IoVideocam/>
                      
                  </div>
                  
              </Button>
          </Link>
              <p className='text-[10px] text-center pt-1'>New meeting</p>
          </div>

      <div className='flex justify-center m-5'>
                <div className='flex justify space-x-4'>
                  <input label="Name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" type="text" id="base-input" class="peer w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  <input label="ID to Call" value={idToCall} onChange={(e)=> setIdToCall(e.target.value)} placeholder="Enter Call ID" type="text" id="base-input" class="w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
        </div> 
        <div className='bg-red-700 flex justify-center items-center'>
          <Link to='/home'>
              <Button 
                      
                      style={{ 
                      maxWidth: '65px', maxHeight: '45px', minWidth: '65px', minHeight: '45px',
                      borderRadius: '12px',
                      backgroundColor: "#004EFF"
                      }}
                      variant="contained" >
                  <div className='text-white text-3xl'>
                  <p className='text-[10px] text-center pt-1'>Join</p>
                      
                  </div>
              </Button>
          </Link>
              
          </div>
      </div>

    </div>
    <div>
            
    </div>

</div>
  )
}

export default JoinPage