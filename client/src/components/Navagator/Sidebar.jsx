import React from 'react'
import {TiHome} from 'react-icons/ti'
import {IoCalendar, IoVideocam, IoChatbox} from 'react-icons/io5'
import {RiSettings4Fill} from 'react-icons/ri'

const SIdebar = ({children}) => {
  return (
    <div className='w-16 h-screen'>
        <div className='absolute top-1/3 items-center ml-6 '>
            <ul className='text-woodsmoke-100 text-center space-y-9'>
                <li><TiHome/></li>
                <li><IoCalendar/></li>
                <li><IoVideocam/></li>
                <li><IoChatbox/></li>
                <li><RiSettings4Fill/></li>
            </ul>
        </div>
        <div className='backdrop-filter backdrop-blur-xl bg-opacity-50 bg-woodsmoke-400  w-72 h-52 rounded-[12px] p-4 '>
          {children}
        </div>
    </div>
  )
}

export default SIdebar