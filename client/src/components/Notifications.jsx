import React, {useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import {MdOutlineCancel} from 'react-icons/md'
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext);
  
  // popup
  const [popup,setPopup]=useState(false);
  const togglePopup=()=>{
    setPopup(popup);
  }
  return (
    <div className='items-center '>
      <div className='space-y-4'>
        <button>
          <MdOutlineCancel/>
        </button>
        <div className='text-center items-center font-bold'>
          <h1>Allow {call.name} to join meeting</h1>
        </div>
        <div className=''>
          {call.isReceivingCall && !callAccepted && (
            <div className='text-center items-center space-x-4 '>
              <h1 className='mb-4'>{call.name} is calling</h1>
              <Button                  
                style={{ 
                      minWidth: '95px', maxWidth: '95px',
                      borderRadius: '12px',
                      backgroundColor: "blue"
                    }}
                  variant="contained" color="primary" onClick={answerCall}>
                Allow
              </Button>
              <Button                  
                style={{ 
                      minWidth: '95px', maxWidth: '95px',
                      borderRadius: '12px',
                      backgroundColor: "red"
                    }}
                  variant="contained" color="primary" onClick={leaveCall}>
                Decline
              </Button>
            </div>
          )}
        </div>

      </div>

    </div>
    // <>
    //   
    // </>
  );
};

export default Notifications;