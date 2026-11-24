import React, { useEffect, useState } from 'react'
import { fetchWeather } from './API'


const OtherWeather = () => {
    const [cities, setcities] = useState([]);
    const commonCties = ["Mumbai","Kolkata","dehli","haldwani"];
    const header = ["City","temp","Feels Like","Humidity","Max temp","Min temp","Wind speed","Wind Degree","Sunrise","Sumset"];
    useEffect(() => {
      const getWeatherData = async()=>{
        const data = await Promise.all(
            commonCties.map((city)=>
            fetchWeather(city)
            )
        );
        setcities(data);
      };
      getWeatherData();
      
    },
     []);
    console.log("city data",cities[0]);
    

  return (
    <>
        <div className='p-4'> 
                <h1 className='text-2xl mb-5 ml-3 font-bold'>Weather of other common City</h1>
            <div className='overflow-x-auto'>
                <div className='grid w-full grid-cols-10 gap-2 text-center'>
                    {/* header */}
                    {header.map((h)=> (
                        <div key={h} className='border-b-2 border-gray-500 p-2 font-bold'>{h}</div>
                    ) )}

                    {/* har city ki row */}
                    
                    {commonCties.map((city,i)=>{
                        const c = cities[i];
                        if(!c) return null // data aane se pahle skip
                        return(
                            <React.Fragment key={city}>
                                <div className='font-semibold'>{city}</div>
                                <div className='font-semibold text-gray-500'>{c?.current?.temperature_2m}</div>
                                <div className='font-semibold text-gray-500'>{c?.current?.apparent_temperature}</div>
                                <div className='font-semibold text-gray-500'>{c?.current?.relative_humidity_2m}</div>
                                <div className='font-semibold text-gray-500'>{c?.daily?.temperature_2m_max}</div>
                                <div className='font-semibold text-gray-500'>{c?.daily?.temperature_2m_min}</div>
                                <div className='font-semibold text-gray-500'>{c?.current?.wind_speed_10m}</div>
                                <div className='font-semibold text-gray-500'>{c?.current?.apparent_temperature}</div>
                                <div className='font-semibold text-gray-500'>{c?.daily?.sunrise[0]?.split("T")[1]}</div>
                                <div className='font-semibold text-gray-500'>{c?.daily?.sunset[0]?.split("T")[1]}</div>
                                {/* <div>{c?.current?.apparent_temperature}</div> */}
                            </React.Fragment>
                        )
                    } )}
                </div>
                   </div>

        </div>
    </>
  )
}

export default OtherWeather
