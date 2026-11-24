import { Thermometer,Droplet, Wind, Clock, Sunrise} from 'lucide-react'
import React from 'react'


const Cart = ({weather}) => {
    // console.log(weather?.current?.temperature_2m);
    
  return (
    <>
        <div className='grid grid-cols-5 gap-5 z-0'>

    {/* left box  */}
    {/* temperature of city */}  
            <div className='border bg-blue-600 col-span-2 rounded-2xl text-white py-5.5 px-4.5 flex flex-col justify-between my-3'>
                <h2 className='flex text-lg font-semibold gap-1.5'> <Thermometer/>  Temperature</h2>

                <h1 className='text-6xl font-semibold'>{weather?.current?.temperature_2m} <span className='text-lg font-normal'>{weather?.current_units?.apparent_temperature}</span></h1>

                <div className='font-semibold flex items-center gap-1'>
                 <div className='bg-white/30 px-3 rounded-xl'>min <p className='text-lg'>{weather?.daily?.temperature_2m_min}°</p></div>
                 <div className='bg-white/30 px-3 rounded-xl'>max <p className='text-lg'>{weather?.daily?.temperature_2m_max}°</p></div>
                </div>

            </div>

            {/* right box */}
            <div className='rounded-sm col-span-3 grid grid-rows-2 px-3 my-3'>
              
                <div className='row-span-1 grid grid-cols-3 gap-3 p-1'>
                  
              {/* temperature box */}
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-1'>
                        <p className='flex items-center gap-1'> <Droplet className='w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg'/> <span> Humidity</span></p>
                      <h3 className='text-4xl font-bold mt-1.5 mb-2'> {weather?.current?.relative_humidity_2m} <span className='text-sm font-normal -ml-1.5 text-gray-600'>%</span>  </h3>

                      <div className='w-full mx-auto h-1.5 bg-blue-100 rounded-4xl overflow-hidden'>
                            <div className='h-1.5 bg-blue-500' style={{width:`${weather?.current?.relative_humidity_2m}%`}}></div>
                      </div>
                        
                        </div>

                   {/* Wind box      */}
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-1'>
                        <p className='flex items-center gap-1'> < Wind className='w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg'/> <span> Wind</span></p>
                      <h3 className='text-4xl font-bold mt-1.5 mb-2'> {weather?.current?.wind_speed_10m} <span className='text-sm font-normal -ml-1.5 text-gray-600'>Km/hr</span> 

                      <div className='text-sm font-semibold text-gray-500 mt-0.5'>
                        Derection 24
                      </div>
                       </h3>
                        
                        </div>

                   {/* feels Like      */}
                    <div className='bg-white p-4 rounded-xl flex flex-col gap-1.5'>
                        <p className='flex items-center gap-1'> <Clock className='w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg'/> <span> Feels like</span></p>
                      <h3 className='text-4xl font-bold mt-1.5 mb-2'> {weather?.current?.apparent_temperature} <span className='text-sm font-normal -ml-1.5 text-gray-600'>°C</span>  

                      <div className='text-sm font-semibold text-gray-500 mt-0.5'>
                          {(weather?.current?.temperature_2m < weather?.current?.apparent_temperature) ? <p>{(weather?.current?.apparent_temperature -weather?.current?.temperature_2m).toFixed(2)} warmer than actual</p> : <p>{(weather?.current?.temperature_2m - weather?.current?.apparent_temperature).toFixed(2)} colder than actual</p> }
                      </div>
                      </h3>
                        
                        </div>
                </div>

               { /* Sun  */}
                <div className='row-span-1 bg-white mt-4 rounded-2xl p-4 flex flex-col justify-between'>
                <div className='flex items-center gap-2'><Sunrise className='w-9 h-9 bg-orange-100 text-orange-400 p-2 rounded-xl'/> <span className='text-lg text-gray-600'>Sun</span> </div> 

                   <div>
                     <div className='flex items-center justify-between'>
                      <h4>Sunrise</h4> <h4 className='text-black font-semibold'>06:45</h4>
                      </div>
                      <div className='flex items-center justify-between'>
                      <h4>Sunset</h4> <h4 className='text-black font-semibold'>12:45</h4>
                     </div>
                     </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Cart
