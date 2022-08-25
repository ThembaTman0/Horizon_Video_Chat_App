import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import {IoIosCall} from 'react-icons/io'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext);
  return (
    <div className='bg-red-500 w-50 h-10 flex justify-center'>
          {console.log("Done running")}
      {call.isReceivedCall && !callAccepted &&(
        <div>
          <h1>{call.name} is calling</h1>
          <button onClick={answerCall} className='w-9 h-9 rounded-lg drop-shadow-lg  bg-green-700'>

                <div className='flex  justify-center items-center '>
                    <IoIosCall className='text-woodsmoke-100'/>
                  </div>

          </button>
        </div>
      )}
    Notification
    </div>
  )
}

export default Notifications