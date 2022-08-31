import React from 'react'
import {useState, useEffect} from 'react';  

const DateTime = () => {
    const [dateState, useDateState] = useState(new Date());
  
  return (
    <div className='text-white'>
        <h1 className='p-2 text-6xl'>    
            {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
            })}
        </h1>
        <h2 className='p-2 text-1xl'>
            {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
        </h2>

    </div>
  )
}

export default DateTime