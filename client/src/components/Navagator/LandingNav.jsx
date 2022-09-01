import React from 'react'
import {IoCalendar, IoVideocam, IoChatbox} from 'react-icons/io5'
import { Button } from '@material-ui/core';
import {SiAddthis} from 'react-icons/si'
import {Link} from 'react-router-dom'


const LandingNav = () => {
    
  return (
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
        <div className=''>
            <Button 
                    
                    style={{ 
                    maxWidth: '65px', maxHeight: '65px', minWidth: '65px', minHeight: '65px',
                    borderRadius: '12px',
                    backgroundColor: "#004EFF"
                    }}
                    variant="contained" >
                <div className='text-white text-3xl'>
                    <SiAddthis/>
                    
                </div>
            </Button>
            <p className='text-[10px] text-center pt-1'>Join</p>
        </div>
        <div className=''>
            <Button 
                    
                    style={{ 
                    maxWidth: '65px', maxHeight: '65px', minWidth: '65px', minHeight: '65px',
                    borderRadius: '12px',
                    backgroundColor: "#004EFF"
                    }}
                    variant="contained" >
                <div className='text-white text-3xl'>
                    <IoCalendar/>
                    
                </div>
            </Button>
            <p className='text-[10px] text-center pt-1'>Schedule</p>
        </div>
    </div>
  )
}

export default LandingNav