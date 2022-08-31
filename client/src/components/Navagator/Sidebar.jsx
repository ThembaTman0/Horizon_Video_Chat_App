import React from 'react'
import {TiHome} from 'react-icons/ti'
import {IoCalendar, IoVideocam, IoChatbox} from 'react-icons/io5'
import {RiSettings4Fill} from 'react-icons/ri'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

const SIdebar = () => {
  return (
    <div className=''>
        <div className='absolute top-[20%] items-center ml-6 '>
            <ul className=' text-center space-y-5'>
                <li>
                  <Link to="/">
                    <Button 
                        
                        style={{ 
                        maxWidth: '45px', maxHeight: '45px', minWidth: '45px', minHeight: '45px',
                        borderRadius: '12px'
                        }}
                        >
                      
                      <TiHome className='text-white'/>
                    </Button>
                  </Link>
                  </li>
                  <li>
                  <Link to="/">
                    <Button 
                        
                        style={{ 
                        maxWidth: '45px', maxHeight: '45px', minWidth: '45px', minHeight: '45px',
                        borderRadius: '12px'
                        }}
                        >
                    
                    <IoCalendar className='text-white'/>
                    </Button>
                  </Link>
                  </li>
                  <li>
                  <Link to="/">
                    <Button 
                        
                        style={{ 
                        maxWidth: '45px', maxHeight: '45px', minWidth: '45px', minHeight: '45px',
                        borderRadius: '12px'
                        }}
                        >
                    
                    <IoVideocam className='text-white'/>
                    </Button>
                  </Link>
                  </li>
                  <li>
                  <Link to="/">
                    <Button 
                        
                        style={{ 
                        maxWidth: '45px', maxHeight: '45px', minWidth: '45px', minHeight: '45px',
                        borderRadius: '12px'
                        }}
                        >
                    
                    <IoChatbox className='text-white'/>
                    </Button>
                  </Link>
                  </li>
                  <li>
                  <Link to="/">
                    <Button 
                        
                        style={{ 
                        maxWidth: '45px', maxHeight: '45px', minWidth: '45px', minHeight: '45px',
                        borderRadius: '12px'
                        }}
                        >
                    
                    <RiSettings4Fill className='text-white'/>
                    </Button>
                  </Link>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default SIdebar