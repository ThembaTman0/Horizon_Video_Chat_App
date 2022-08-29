import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext);
  


  return (

      <div className='flex justify-center items-center' >

        <div className='pt-4'>
          {call.isReceivingCall && !callAccepted && (
              <div className='text-white backdrop-filter backdrop-blur-xl bg-opacity-50 bg-woodsmoke-700  w-72 h-28 rounded-[12px] p-4 '>
                <div className='text-center items-center space-x-4 '>
                  {/* <button>
                    <MdOutlineCancel/>
                  </button> */}
                  <div className='text-center items-center font-bold p-2'>
                    <h1>Allow {call.name} to join meeting</h1>
                  </div>
                  
                  <Button                  
                    style={{ 
                          minWidth: '95px', maxWidth: '95px',  maxHeight: '30px', minHeight: '30px',
                          borderRadius: '12px',
                          backgroundColor: "blue"
                        }}
                      variant="contained" color="primary" onClick={answerCall}>
                    Allow
                  </Button>
                  <Button                  
                    style={{ 
                          minWidth: '95px', maxWidth: '95px',  maxHeight: '30px', minHeight: '30px',
                          borderRadius: '12px',
                          backgroundColor: "red"
                        }}
                      variant="contained" color="primary" onClick={leaveCall}>
                    Decline
                  </Button>
                </div>
              </div>
          )}
        </div>

      </div>


  );
};

export default Notifications;