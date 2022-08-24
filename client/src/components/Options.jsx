import { Container } from 'postcss';
import React, { useContext, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {MdContentCopy,MdCallEnd} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'
import { SocketContext } from '../SocketContext'

const Options = ( {children}) => {

  const {me, callAccepted, name , setName, leaveCall, callUser, callEnded} = useContext(SocketContext);
  const [idToCall, setIdToCall]= useState('');
  
  return (
    <div>
      <div>
        <form noValidate autoComplete='off'>
          <p>Meeting Link</p>
          {/* <TextField label="Name" value={name} onChange={(e)=> setName(e.target.value)}/> */}

        </form>
      <div className='space-x-4'>

          <button className='w-8 h-8 rounded-lg bg-opacity-50 backdrop-blur-xl drop-shadow-lg  bg-woodsmoke-925'>
              <div className='flex  justify-center items-center '>
                  <IoIosCall className='text-woodsmoke-100 '/>
                </div>
            </button>
            <button className='w-9 h-9 rounded-lg drop-shadow-lg  bg-red-700'>
              <div className='flex  justify-center items-center '>
                  <MdCallEnd className='text-woodsmoke-100'/>
                </div>
            </button>
            <CopyToClipboard text={me}>
              <button className='w-8 h-8 rounded-lg bg-opacity-50 backdrop-blur-xl drop-shadow-lg  bg-woodsmoke-925'>
                <div className='flex  justify-center items-center '>
                  <MdContentCopy className='text-woodsmoke-100 '/>
                </div>
              </button>
            </CopyToClipboard>
      </div>
      </div>
      Options
        {children}
    </div>
  )
}

export default Options