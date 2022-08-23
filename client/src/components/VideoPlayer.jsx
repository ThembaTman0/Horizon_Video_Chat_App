import React from 'react'
import {BsMicMuteFill} from 'react-icons/bs'

const VideoPlayer = () => {
  return (
    <div className='mt-16'>
      
      <div class="p-6 w-60 h-60  bg-woodsmoke-50 rounded-lg border border-woodsmoke-50 shadow-md dark:bg-woodsmoke-800 dark:border-gray-700">
          {/* Name holder */}
          <div >
            <BsMicMuteFill/>
          </div>
      </div>

    </div>
  )
}

export default VideoPlayer