import React, { useEffect, useState } from 'react'
import Weather from './component/weather'
import Navbar from './component/navbar'
import OtherWeather from './component/otherWeather'
import { fetchWeather } from './component/API'

const App = () => {
  const [weather, setweather] = useState(null);
const [cityName, setcityName] = useState("dehli")

  const handleSearch = async(city)=>{
    // console.log("city called from handle");
    
  if(!city.trim())
    return;

    try{
    const data = await fetchWeather(city);
    
    // console.log("city called from handle");
    setweather(data);
    setcityName(city.trim());
    // console.log(data);
    // setcityName(city.trim());
    // console.log(cityName);
    
    
    }
    catch(error){
      console.log(error.message);
      
    }
    
  }
  
    useEffect(() => {
      handleSearch("dehli")
    }, [])


  return (
    <>
    <div className='bg-blue-50'>
      <Navbar onsearch={handleSearch}/>
     <Weather weather={weather} cityName = {cityName}/> 
        <OtherWeather/>
        </div>
    </>
  )
}

export default App