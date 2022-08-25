import { Container } from 'postcss';
import React, { useContext, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {MdContentCopy,MdCallEnd} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'
import {BsFillMicMuteFill} from 'react-icons/bs'
import { SocketContext } from '../SocketContext'

const Options = ( {children}) => {

  const {me, callAccepted, name , setName, leaveCall, callUser, callEnded} = useContext(SocketContext);
  const [idToCall, setIdToCall]= useState('');
  
  return (
    <div>

      <div>
  
      <form noValidate autoComplete='off'>
          <p>Enter Name</p>
          
          <div>
          <div className='space-x-4'>
            
            <button className='w-8 h-8 rounded-lg bg-opacity-50 backdrop-blur-xl drop-shadow-lg  bg-woodsmoke-925'>
                <div className='flex  justify-center items-center '>
                    <BsFillMicMuteFill className='text-woodsmoke-100 '/>
                  </div>
            </button>
            
            {/* Accept and end call */}
            {
              callAccepted && !callEnded ?(
                <div onClick={leaveCall} className='w-9 h-9 rounded-lg drop-shadow-lg  bg-red-700'>
                <div className='flex  justify-center items-center '>
                    <MdCallEnd className='text-woodsmoke-100'/>
                  </div>
              </div>
              ):(
                <button onClick={()=> callUser(idToCall)} className='w-9 h-9 rounded-lg drop-shadow-lg  bg-green-700'>
                <div className='flex  justify-center items-center '>
                    <IoIosCall className='text-woodsmoke-100'/>
                  </div>
              </button>
              )
            }                

              <CopyToClipboard text={me}>

                <button className='w-8 h-8 rounded-lg bg-opacity-50 backdrop-blur-xl drop-shadow-lg  bg-woodsmoke-925'>
                  <div className='flex  justify-center items-center '>
                    <MdContentCopy className='text-woodsmoke-100 '/>
                  </div>
                </button>
              </CopyToClipboard>
          </div>

            {/* <label for="base-input" class="block text-sm font-medium text-gray-900 dark:text-gray-300">Enter Name</label> */}
            <div className='flex justify-center m-6 space-x-4'>
              <input label="Name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" type="text" id="base-input" class="w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <input label="ID to Call" value={idToCall} onChange={(e)=> setIdToCall(e.target.value)} placeholder="Enter Call ID" type="text" id="base-input" class="w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              {console.log(me)}
            </div>
        </div>
      </form>
      {children}
      </div>


    </div>
  )
}

export default Options