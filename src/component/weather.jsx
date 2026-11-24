import React from 'react'
import Cart from './cart'

const Weather = ({weather,cityName}) => {
  if(weather){
  console.log(weather?.current?.temperature_2m);
  }

  
  return (
  <>
    <div className='px-6 py-3 mx-25 z-0'>
      <h1 className='text-3xl font-bold'>Weather for {cityName}</h1>
      <p className='text-sm font-semibold text-gray-500 mb-3'>Current condition</p>
        <Cart weather={weather}/>
    </div>
  </>
  )
}

export default Weather
