import React, { useState, useContext, useRef } from 'react';
import { Button } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { makeStyles } from '@material-ui/core/styles';
import {MdContentCopy,MdCallEnd} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'
import {IoVideocam} from 'react-icons/io5'
import {BiVideoOff} from 'react-icons/bi'
import {BsFillMicMuteFill} from 'react-icons/bs'
import {SocketContext} from '../SocketContext'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 5,
  },
  // paper: {
  //   padding: '10px 20px',
  //   background: 'none',
  //   boxShadow: 'none',

  // },
}));

const Options = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, handleVideo, stream } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();
  const [playing, setPlaying]= useState(false);

  
  return (
    <div className='fixed flex justify-center bottom-0'>
      <div className='flex justify-center w-120'>
      {/* <Paper elevation={10} className={classes.paper}> */}
        <form className={classes.root} noValidate autoComplete="off">
          <div className='flex justify-center items-center space-x-4'>
            <div>
              {/* <Typography gutterBottom variant="h6">Account Info</Typography> */}
              
              <CopyToClipboard text={me}>
                <Button 
                 
                 style={{ 
                  maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px',
                  borderRadius: '12px',
                  backgroundColor: "#060607"
                 }}
                 variant="contained" >
                    <div className='text-white'>
                      <MdContentCopy  size={15}/>
                    </div>

                </Button>
              </CopyToClipboard>
            </div>
            <div>
              {/* <Typography gutterBottom variant="h6">Make a call</Typography> */}
              
              {callAccepted && !callEnded ? (
                <Button
                style={{
                maxWidth: '40x', maxHeight: '40px', minWidth: '40px', minHeight: '40px',
                borderRadius: '12px',
                backgroundColor: "red"}}
                variant="contained" onClick={leaveCall} >
                    <div className='text-white'>
                      <MdCallEnd  size={15}/>
                    </div>
                </Button>
              ) : (
                <Button 
               
                style={{ 
                  maxWidth: '40x', maxHeight: '40px', minWidth: '40px', minHeight: '40px',
                  borderRadius: '12px',
                  backgroundColor: "green"}}
                variant="contained" onClick={() => callUser(idToCall)}>
                    <div className='text-white'>
                      <IoIosCall  size={15}/>
                    </div>
                </Button>
              )}

            </div>
            <div>
               
                  <Button 
                    onClick={handleVideo}
                    style={{ 
                    maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px',
                    borderRadius: '12px',
                    backgroundColor: "#060607"
                    }}
                    variant="contained" >
                      <div className='text-white'>
                      {stream ? <BiVideoOff size={15}/> : 
                    <IoVideocam size={15}/>}

                      </div>
                    
                </Button>
               
                  {/* <Button 
                    style={{ 
                    maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px',
                    borderRadius: '12px',
                    backgroundColor: "#060607"
                    }}
                    variant="contained" >
                      <div className='text-white'>
                        <IoVideocam size={15}/>
                      </div>
 
                 </Button> */}


            </div>
          </div>
            {/* <div className='flex justify-center'>
                <div className='flex justify-center m-6 space-x-4'>
                  <input label="Name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" type="text" id="base-input" class="peer w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                  <input label="ID to Call" value={idToCall} onChange={(e)=> setIdToCall(e.target.value)} placeholder="Enter Call ID" type="text" id="base-input" class="w-18 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-woodsmoke-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
              </div> */}
        </form>
        {/* {children} */}
      {/* </Paper> */}
    </div>
    </div>
  );
};

export default Options;