import { SunMedium } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = ({onsearch}) => {
    
const [city, setcity] = useState("");

  return (
    <>
        <div className='border-b px-10'>
            <div className='flex items-center justify-between p-3 mx-8'>
            <div className='flex items-center gap-3'>
                <SunMedium className='w-8 h-8 p-1 bg-blue-700 text-white rounded-lg'/>
            <h1 className='text-lg font-bold'>Weather App</h1>
                </div>
            <div>
                <input type="text" placeholder='enter city' className='border px-1 mr-2' onChange={(e)=>setcity(e.target.value)}/>

                <button className='rounded-lg bg-blue-700 text-white font-semibold py-0.5 px-2' onClick={()=>onsearch(city)}>Search</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar