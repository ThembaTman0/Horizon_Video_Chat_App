import React from 'react'
import { useContext,useState } from 'react'

import {SocketContext} from '../SocketContext'

const VideoPlayer = () => {
  const {name, callAccepted, myVideo, userVideo, callEnded, stream,call} =useContext(SocketContext);
  const [counter, setCounter] = useState(0)
  return (
    <div className='mt-16 flex justify-center space-x-4'>  
      {stream &&(
        <div>
            <div  class="aspect-auto w-72  bg-woodsmoke-50 rounded-lg border border-woodsmoke-50 shadow-md dark:bg-woodsmoke-800 dark:border-gray-700">
              <video playsInline muted ref={myVideo} autoPlay className='flip-v rounded-lg w-full h-full'/>  
              
          </div>
          <p className='bottom-4 text-white'>{name || 'Name'}</p>
        </div>
      )}
      {
        callAccepted && !callEnded && (

          <div>
            <div class="aspect-auto w-72  bg-woodsmoke-50 rounded-lg border border-woodsmoke-50 shadow-md dark:bg-woodsmoke-800 dark:border-gray-700">

            <video playsInline muted ref={userVideo} autoPlay className='flip-v rounded-lg w-full h-full'/>   

              
          </div>
            <p className='bottom-4 text-white'>{call.name || 'Name'}</p>
        </div>
        )
      }

        


    </div>
  )
}

export default VideoPlayer