import React from 'react'
import {useState, useEffect} from 'react';  

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  
  useEffect(()=>{
    setInterval(()=> setDate(new Date()), 1000);
  },[]);

  const hours = date.getHours();
  const minute = date.getMinutes();
  return (
    <div className='text-white'>
        <h1 className='p-2 text-6xl'>    
        {("0" + date.getHours()).slice(-2)}
        <span>:</span>
        {("0" + date.getMinutes()).slice(-2)}
        </h1>
        <h2 className='p-2 text-1xl'>
            {date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
        </h2>

    </div>
  )
}

export default DateTime